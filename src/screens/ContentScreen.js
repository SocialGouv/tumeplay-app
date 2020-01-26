import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import CustomFooter from './CustomFooter';
import QuizzScreen from './QuizzScreen';
import QuizzFinishScreen from './QuizzFinishScreen';
import BadgeFinishScreen from './BadgeFinishScreen';

import MoreThan25YearsScreen from './MoreThan25YearsScreen';
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
  Modal.setAppElement('body'); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

  const [isQuizzModalVisible, setIsQuizzModalVisible] = useState(false);
  const [isAge25ModalVisible, setIsAge25ModalVisible] = useState(false);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);
  const [isBadgeModalVisible, setIsBadgeModalVisible] = useState(false);

  const [isAge25, setIsAge25] = useState(null);

  const [badgeInfoDetails, setbadgeInfoDetails] = useState();
  const [isQuizzButtonVisible, setIsQuizzButtonVisible] = useState(false);
  const [needResultModal, setNeedResultModal] = useState(false);
  const [localContents, setLocalContents] = useState([]);
  const [fullContents, setFullContents] = useState([]);
  const [fullQuestions, setFullQuestions] = useState([]);
  const [localQuestions, setLocalQuestions] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(false);
  const [selectedTheme] = useState(props.navigation.state.params.selectedTheme);
  const [availableTokens, setAvailableTokens] = useState(0);
  const [resetQuizzQuestions, setResetQuizzQuestions] = useState(false);
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

  // @TODO : Something weird here, using hooks. React doesn't seems to see changes in first objects, so they're rendered as sames as before.
  // So we clear it up, and then filter using a very small timer.
  // Sooooo @TODO : Fix this mess.
  useEffect(() => {
    setLocalContents([]);

    setTimeout(() => {
      var _filtered = fullContents.filter(
        content => content.category === currentCategory,
      );

      setLocalContents(_filtered);
    }, 1);
  }, [currentCategory, fullContents]);

  useEffect(() => {
    setLocalQuestions(fullQuestions);
  }, [currentCategory, fullQuestions]);

  useEffect(() => {
    if (needResultModal) {
      setNeedResultModal(false);

      if (isAge25) {
        setIsBadgeModalVisible(!isBadgeModalVisible);
      } else {
        setIsResultModalVisible(!isResultModalVisible);
      }
    }
  }, [isAge25, isBadgeModalVisible, isResultModalVisible, needResultModal]);

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  async function _openInitialModal() {
    /**
     * STEPS:
     * 0. Get user data ( isAge25)
     * 1. Check if isAge25 is null
     * 2. if null, open the modal MoreThan25Years
     * 3. else  open the modal quizzModal
     * */
    // Step 1
    const _isAge25 = await UserService.getIsMoreThan25YearsOld();
    console.log(`_isAge25: ${_isAge25}`);

    setIsAge25(_isAge25 || null);

    if (_isAge25 === null || _isAge25 === undefined) {
      // Step 2
      _toggleMoreThan25YearsModal();
    } else {
      // Step 3
      _shuffleQuestions();
      _toggleQuizzModal();
    }
  }

  function _shuffleQuestions() {
    let randomQuestions = shuffleArray(fullQuestions);
    randomQuestions = randomQuestions.slice(0, 10);

    setLocalQuestions(randomQuestions);
  }

  function _toggleBadgeModal() {
    // Switching between the age modal and quizz modal
    setIsBadgeModalVisible(!isBadgeModalVisible);
  }

  function _toggleMoreThan25YearsModal() {
    // Switching between the age modal and quizz modal
    setIsAge25ModalVisible(!isAge25ModalVisible);
  }

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

  function _onRetry() {
    // Set to invisible, resetup and reopen quizz modal
    _shuffleQuestions();
    setResetQuizzQuestions(!resetQuizzQuestions);
    setIsBadgeModalVisible(false);
    _toggleQuizzModal();
  }

  /**
   * @param {number} value
   */
  async function _onSelectedMoreThan25Years() {
    await setAndToggleMoreThan25Years(true);
  }
  /**
   * @param {number} value
   */
  async function _onSelectedLessThan25Years() {
    await setAndToggleMoreThan25Years(false);
  }

  /**
   *
   * @param {boolean} val
   */
  async function setAndToggleMoreThan25Years(val) {
    await UserService.setIsMoreThan25YearsOld(val);
    EventRegister.emit('isAgeMoreThan25Changed', val);
    _toggleMoreThan25YearsModal();
    _shuffleQuestions();
    _toggleQuizzModal();
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
            resetQuestions={resetQuizzQuestions}
            onFinishedQuizz={_onFinishedQuizz}
            questions={localQuestions}
          />
        </View>
      </Modal>

      {/* Modal for asking user if age > 25 */}
      <Modal
        visible={isAge25ModalVisible}
        isVisible={isAge25ModalVisible}
        style={ModalStyle.modal}
        animationType="fade"
        backdropOpacity={0}
        transparent={true}>
        <View style={ModalStyle.backdrop}></View>
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleMoreThan25YearsModal} />

          <MoreThan25YearsScreen
            moreThan25={_onSelectedMoreThan25Years}
            lessThan25={_onSelectedLessThan25Years}
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

      <Modal
        visible={isBadgeModalVisible}
        isVisible={isBadgeModalVisible}
        style={ModalStyle.modal}
        animationType="fade"
        transparent={true}>
        {/* Because backdrop is not available for web, just a little trick ... */}
        <View style={ModalStyle.backdrop}></View>
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleBadgeModal} />

          <BadgeFinishScreen
            badgeInfoDetails={badgeInfoDetails}
            availableTokens={availableTokens}
            onRetry={_onRetry}
          />
        </View>
      </Modal>

      {/* Fix staying button on web */}
      {isQuizzButtonVisible && !isQuizzModalVisible && (
        <QuizzButton onClick={_openInitialModal} />
      )}
    </SafeAreaView>
  );
}
