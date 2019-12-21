import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

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

import autoScrollToTop from '../hooks/autoScrollToTop';
import useIsMounted from '../hooks/isMounted';

import Styles from '../styles/Styles';
import ModalStyle from '../styles/components/Modal';

ContentScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function ContentScreen(props) {
  const [isQuizzModalVisible, setIsQuizzModalVisible] = useState(false);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);
  const [isQuizzButtonVisible, setIsQuizzButtonVisible] = useState(false);
  const [needResultModal, setNeedResultModal] = useState(false);
  const [localContents, setLocalContents] = useState([]);
  const [fullContents, setFullContents] = useState([]);
  const [fullQuestions, setFullQuestions] = useState([]);
  const [localQuestions, setLocalQuestions] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(false);
  const [selectedTheme] = useState(props.navigation.state.params.selectedTheme);
  const [availableTokens, setAvailableTokens] = useState(0);
  const isMounted = useIsMounted();

  autoScrollToTop(props);

  // Listeners to fix QuizzButton display on web mode
  const willFocusSubscription = props.navigation.addListener(
    'willFocus',
    () => {
      setIsQuizzButtonVisible(true);
    },
  );

  const willBlurSubscription = props.navigation.addListener('willBlur', () => {
    if (isQuizzButtonVisible) {
      setIsQuizzButtonVisible(false);
    }

    willFocusSubscription.remove();
    willBlurSubscription.remove();
  });

  useEffect(() => {
    async function _fetchContents() {
      const _contents = await RemoteApi.fetchContents(selectedTheme);
      console.log(_contents);
      if (isMounted.current) {
        setFullContents(_contents);
        _filterContent(1);
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

  // Remove the listener when you are done
  //	didBlurSubscription.remove();

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

  useEffect(() => {
    console.log(currentCategory);
    var _filtered = fullQuestions.filter(
      question => question.category == currentCategory,
    );
    setLocalQuestions(_filtered);
  }, [currentCategory, fullQuestions]);

  useEffect(() => {
    async function _addTokens() {
      const _newTokens = await UserService.addTokens(200);

      setAvailableTokens(_newTokens);

      EventRegister.emit('tokensAmountChanged', _newTokens);
    }

    function _toggleResultModal() {
      setIsResultModalVisible(!isResultModalVisible);
    }

    if (needResultModal) {
      _addTokens();
      setNeedResultModal(false);
      _toggleResultModal();
    }
  }, [needResultModal]);

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

  return (
    <SafeAreaView style={[Styles.safeAreaView, {}]}>
      <View style={[Styles.safeAreaViewInner, {flex: 1}]}>
        <TopMenu selectedTheme={selectedTheme} onPress={_filterContent} />

        <ScrollView style={{flex: 0.8}}>
          <ContentCards style={{flex: 0.8}} localContents={localContents} />

          <ContactButton />

          <CustomFooter
            style={{flex: 0.1}}
            containerStyle={{paddingLeft: 0, paddingRight: 0}}
          />
        </ScrollView>
      </View>

      <Modal
        visible={isQuizzModalVisible}
        isVisible={isQuizzModalVisible}
        style={ModalStyle.modal}
        animationType="fade"
        backdropOpacity={0}
        transparent={true}>
        {/* Because backdrop is not available for web, just a little trick ... */}
        <View style={ModalStyle.backdrop}></View>
        <View style={ModalStyle.innerModal}>
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
        style={ModalStyle.modal}
        animationType="fade"
        transparent={true}>
        {/* Because backdrop is not available for web, just a little trick ... */}
        <View style={ModalStyle.backdrop}></View>
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleResultModal} />

          <QuizzFinishScreen
            availableTokens={availableTokens}
            onOrder={_onOrder}
          />
        </View>
      </Modal>
      {/* Fix staying button on web */}
      {isQuizzButtonVisible && !isQuizzModalVisible && (
        <QuizzButton onClick={_toggleQuizzModal} />
      )}
    </SafeAreaView>
  );
}
