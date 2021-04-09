import React, {useState, useRef, useEffect, useCallback} from 'react';
import {ScrollView, SafeAreaView, View, Platform, Text} from 'react-native';
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
import Tracking from '../services/Tracking';
import QuizService from '../services/Quiz';

import autoScrollToTop from '../hooks/autoScrollToTop';
import useIsMounted from '../hooks/isMounted';

import Styles from '../styles/Styles';
import ModalStyle from '../styles/components/Modal';

ContentScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function ContentScreen(props) {
  // Modal.setAppElement('body'); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

  const [isQuizzModalVisible, setIsQuizzModalVisible] = useState(false);
  const [isAge25ModalVisible, setIsAge25ModalVisible] = useState(false);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);
  const [isBadgeModalVisible, setIsBadgeModalVisible] = useState(false);

  const [isAge25, setIsAge25] = useState(null);

  const [badgeInfoDetails] = useState();
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
  const [activeOpacity, setActiveOpacity] = useState(0.5);
  const isMounted = useIsMounted();
  const isIOS = useState(Platform.OS === 'ios' ? true : false);

  const opacityTimer = useRef(null);
  autoScrollToTop(props);

  var quizTimer = false;
  // Listeners to fix QuizzButton display on web mode
  const willFocusSubscription = props.navigation.addListener(
    'willFocus',
    () => {
      setIsQuizzButtonVisible(true);
    },
  );

  useEffect(() => {
    if (isMounted.current) {
      const handleScroll = event => {
        setActiveOpacity(1);

        if (opacityTimer && opacityTimer.current) {
          clearTimeout(opacityTimer.current);
        }

        opacityTimer.current = setTimeout(() => {
          setActiveOpacity(0.5);
        }, 150);
      };
      if (Platform.OS === 'web') {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [isMounted]);

  const willBlurSubscription = props.navigation.addListener('willBlur', () => {
    if (isQuizzButtonVisible) {
      setIsQuizzButtonVisible(false);
    }

    willFocusSubscription.remove();
    willBlurSubscription.remove();
  });

  const _fetchContents = useCallback(async () => {
    const _contents = await RemoteApi.fetchContents(selectedTheme);
    if (isMounted.current) {
      setFullContents(_contents);
      _filterContent(1);
    }
  }, [_filterContent, selectedTheme, isMounted]);

  const _fetchQuestions = useCallback(async () => {
    const _allQuestions = await RemoteApi.fetchQuestions();
    if (isMounted.current) {
      await QuizService.setQuestions(_allQuestions);
      const _filteredQuestions = await QuizService.getQuestions(selectedTheme);
      setLocalQuestions(_filteredQuestions);
    }
  }, [isMounted, selectedTheme]);

  useEffect(() => {
    _fetchContents();
    _fetchQuestions();
  }, [
    _fetchContents,
    _fetchQuestions,
    _filterContent,
    isMounted,
    selectedTheme,
  ]);

  useEffect(() => {
    setLocalContents([]);
    var _filtered = fullContents.filter(
      content => content.category === currentCategory,
    );
    setLocalContents(_filtered);
  }, [currentCategory, fullContents]);

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

  async function _openInitialModal() {
    const _isAge25 = await UserService.getIsMoreThan25YearsOld();
    setIsAge25(_isAge25 || null);

    // if (_isAge25 === null || _isAge25 === undefined) {
    //   _toggleMoreThan25YearsModal();
    // } else {
      Tracking.quizStarted();

      quizTimer = Math.floor(Date.now() / 1000);

      await _shuffleQuestions();
      _toggleQuizzModal();
    // }
  }

  async function _shuffleQuestions() {
    const _filteredQuestions = await QuizService.getQuestions(selectedTheme);
    setLocalQuestions(_filteredQuestions);
  }

  function _toggleBadgeModal() {
    setIsBadgeModalVisible(!isBadgeModalVisible);
  }

  function _toggleMoreThan25YearsModal() {
    setIsAge25ModalVisible(!isAge25ModalVisible);
  }

  function _toggleQuizzModal() {
    setIsQuizzModalVisible(!isQuizzModalVisible);
  }

  function _toggleResultModal() {
    setIsResultModalVisible(!isResultModalVisible);
  }

  const _filterContent = useCallback(
    (selectedCategory, categoryText) => {
      Tracking.categorySelected(selectedTheme, categoryText);
      setCurrentCategory(selectedCategory);
    },
    [selectedTheme],
  );

  function _onFinishedQuizz() {
    quizTimer = Math.floor(Date.now() / 1000) - quizTimer;
    Tracking.quizEnded(quizTimer);

    _toggleQuizzModal();
    setResetQuizzQuestions(!resetQuizzQuestions);
    setNeedResultModal(true);
  }

  function _onOrder() {
    _toggleResultModal();
    props.navigation.navigate('TunnelProductSelect');
  }

  function _onRetry(hideQuizzModal) {
    _shuffleQuestions();
    setResetQuizzQuestions(!resetQuizzQuestions);
    setIsBadgeModalVisible(false);
    setIsResultModalVisible(false);
    if (hideQuizzModal) {
      _toggleQuizzModal();
    }
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
   *e AQq>
   * @param {boolean} val
   */
  async function setAndToggleMoreThan25Years(val) {
    await UserService.setIsMoreThan25YearsOld(val);
    EventRegister.emit('isAgeMoreThan25Changed', val);
    setIsAge25(val);
    _toggleMoreThan25YearsModal();
    _shuffleQuestions();
    _toggleQuizzModal();
  }

  function _onContactClick() {
    setIsAge25ModalVisible(false);
    setIsQuizzModalVisible(false);
    setIsResultModalVisible(false);

    props.navigation.navigate('StayInTouch');
  }

  return isIOS[0] ? (
    <SafeAreaView style={Styles.safeAreaView}>
      <TopMenu
        navigation={props.navigation}
        selectedTheme={selectedTheme}
        onPress={_filterContent}
      />
      <View style={[Styles.safeAreaViewInner, {flex: 1, paddingTop: 40}]}>
        <ScrollView style={{flex: 0.8}}>
          <ContentCards
            activeOpacity={activeOpacity}
            style={{flex: 0.8}}
            localContents={localContents}
          />
          <ContactButton />
          <CustomFooter
            style={{flex: 0.1}}
            navigation={props.navigation}
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
            onContactClick={_onContactClick}
          />
        </View>
      </Modal>

      <Modal
        visible={isResultModalVisible}
        isVisible={isResultModalVisible}
        style={ModalStyle.modal}
        animationType="fade"
        transparent={true}>
        <View style={ModalStyle.backdrop}></View>
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleResultModal} />
          <QuizzFinishScreen
            onRetry={_onRetry}
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
        <View style={ModalStyle.backdrop} />
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleBadgeModal} />

          <BadgeFinishScreen
            badgeInfoDetails={badgeInfoDetails}
            availableTokens={availableTokens}
            onRetry={_onRetry}
          />
        </View>
      </Modal>
      {selectedTheme &&
        !selectedTheme.isSpecial &&
        isQuizzButtonVisible &&
        !isQuizzModalVisible && <QuizzButton onClick={_openInitialModal} />}
    </SafeAreaView>
  ) : (
    <ScrollView style={{flex: 1}}>
      <TopMenu
        navigation={props.navigation}
        selectedTheme={selectedTheme}
        onPress={_filterContent}
      />
      <View style={[Styles.safeAreaViewInner, {flex: 1, paddingTop: 40}]}>
        <ScrollView style={{flex: 0.8}}>
          <ContentCards
            activeOpacity={activeOpacity}
            style={{flex: 0.8}}
            localContents={localContents}
          />
          <ContactButton />
          <CustomFooter
            style={{flex: 0.1}}
            navigation={props.navigation}
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
            onContactClick={_onContactClick}
          />
        </View>
      </Modal>

      <Modal
        visible={isResultModalVisible}
        isVisible={isResultModalVisible}
        style={ModalStyle.modal}
        animationType="fade"
        transparent={true}>
        <View style={ModalStyle.backdrop}></View>
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleResultModal} />

          <QuizzFinishScreen
            onRetry={_onRetry}
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
        <View style={ModalStyle.backdrop} />
        <View style={ModalStyle.innerModal}>
          <ModalCloseButton onClose={_toggleBadgeModal} />

          <BadgeFinishScreen
            badgeInfoDetails={badgeInfoDetails}
            availableTokens={availableTokens}
            onRetry={_onRetry}
          />
        </View>
      </Modal>
      {selectedTheme &&
        !selectedTheme.isSpecial &&
        isQuizzButtonVisible &&
        !isQuizzModalVisible && <QuizzButton onClick={_openInitialModal} />}
    </ScrollView>
  );
}
