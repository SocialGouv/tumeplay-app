import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView, View, Platform} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import CustomFooter from './CustomFooter';
import QuizzScreen from './QuizzScreen';
import QuizzFinishScreen from './QuizzFinishScreen';
import ContactButton from './components/global/ContactButton';
import ContentCards from './components/content/ContentCards';
import TopMenu from './components/content/TopMenu';
import QuizzButton from './components/content/QuizzButton';
import ModalCloseButton from './components/global/ModalCloseButton';
import RemoteApi from '../services/RemoteApi';
import UserService from '../services/User';

import useIsMounted from '../hooks/isMounted';

import Styles from '../styles/Styles';

ContentScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function ContentScreen(props) {
  const [isQuizzModalVisible, setIsQuizzModalVisible] = useState(false);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);
  const [needResultModal, setNeedResultModal] = useState(false);
  const [localContents, setLocalContents] = useState([]);
  const [fullContents, setFullContents] = useState([]);
  const [fullQuestions, setFullQuestions] = useState([]);
  const [localQuestions, setLocalQuestions] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(false);
  const [selectedTheme] = useState(props.navigation.state.params.selectedTheme);

  const isMounted = useIsMounted();

  useEffect(() => {
    async function _fetchContents() {
      const _contents = await RemoteApi.fetchContents(selectedTheme);
      if (isMounted.current) {
        setFullContents(_contents);
        _filterContent(0);
      }
    }

    async function _fetchQuestions() {
      const _questions = await RemoteApi.fetchQuestions(selectedTheme);
      if (isMounted.current) {
        setFullQuestions(_questions);
      }
    }

    _fetchContents();
    _fetchQuestions();
  }, [isMounted, selectedTheme]);

  // @TODO : Something weird here, using hooks. React doesn't seems to see changes in first objects, so they're rendered as sames as before.
  // So we clear it up, and then filter using a very small timer.
  // Sooooo @TODO : Fix this mess.
  useEffect(() => {
    setLocalContents([]);

    setTimeout(() => {
      var _filtered = fullContents.filter(
        content => content.category == currentCategory,
      );

      setLocalContents(_filtered);
    }, 1);
  }, [currentCategory, fullContents]);

  // @TODO : Double check for category ID on backend when going online, and remove that dirty " -1"
  useEffect(() => {
    var _filtered = fullQuestions.filter(
      question => question.category - 1 == currentCategory,
    );
    setLocalQuestions(_filtered);
  }, [currentCategory, fullQuestions]);

  useEffect(() => {
    async function _addTokens() {
      await UserService.addTokens(200);
    }

    function _toggleResultModal() {
      setIsResultModalVisible(!isResultModalVisible);
    }

    if (needResultModal) {
      if (needResultModal) {
        _addTokens();
        setNeedResultModal(false);
        _toggleResultModal();
      }
    }
  }, [isResultModalVisible, needResultModal]);

  function _toggleQuizzModal() {
    setIsQuizzModalVisible(!isQuizzModalVisible);
  }

  function _toggleResultModal() {
    setIsResultModalVisible(!isResultModalVisible);
  }

  function _filterContent(selectedCategory) {
    setCurrentCategory(selectedCategory);
  }

  function _onFinishedQuizz() {
    _toggleQuizzModal();
    setNeedResultModal(true);
  }

  function _onOrder() {
    _toggleResultModal();
    props.navigation.navigate('TunnelProductSelect');
  }

  // @TODO : Need to improve this. A LOT.
  function _getModalStyle() {
    const isWeb = Platform.OS == 'web';

    return {
      flex: 1,
      marginBottom: 25,
      marginRight: isWeb ? 'auto' : 25,
      marginLeft: isWeb ? 'auto' : 25,
      marginTop: 35,
      borderRadius: 7,
      borderColor: '#000000',
      position: 'relative',
      maxWidth: isWeb ? 900 : undefined,
      maxHeight: isWeb ? 700 : undefined,
    };
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={[Styles.safeAreaViewInner, {flex: 1}]}>
        <TopMenu selectedTheme={selectedTheme} onPress={_filterContent} />

        <ScrollView style={{flex: 0.9}}>
          <ContentCards localContents={localContents} />

          <ContactButton />

          <CustomFooter />
        </ScrollView>

        <QuizzButton onClick={_toggleQuizzModal} />
      </View>
      <Modal
        visible={isQuizzModalVisible}
        isVisible={isQuizzModalVisible}
        style={{margin: 0, alignItems: undefined, justifyContent: undefined}}
        animationType="slide"
        backdropColor="black"
        backdropOpacity={0.55}
        transparent={true}>
        <View style={_getModalStyle()}>
          <ModalCloseButton onClose={_toggleQuizzModal} />

          <QuizzScreen
            onFinishedQuizz={_onFinishedQuizz}
            questions={localQuestions}
          />
        </View>
      </Modal>
      <Modal
        visible={isResultModalVisible}
        isVisible={isResultModalVisible}
        style={{margin: 0, alignItems: undefined, justifyContent: undefined}}
        animationType="slide"
        transparent={true}>
        <View style={_getModalStyle()}>
          <ModalCloseButton onClose={_toggleResultModal} />

          <QuizzFinishScreen onOrder={_onOrder} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
