import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  YellowBox,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

import CustomFooter from './CustomFooter';
import QuizzScreen from './QuizzScreen';
import QuizzFinishScreen from './QuizzFinishScreen';
import ContactButton from './components/global/ContactButton';
import ContentCard from './components/content/ContentCard';
import TopMenu from './components/content/TopMenu';
import QuizzButton from './components/content/QuizzButton';
import RemoteApi from '../services/RemoteApi';

import Styles from '../styles/Styles';

export default class ContentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: 0,
      isQuizzModalVisible: false,
      isResultModalVisible: false,
      needResultModal: false,
      localContents: [],
      localQuestion: [],
    };

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  componentDidMount() {
    this._isMounted = true;
    this._fetchContents();
    this._fetchQuestions();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _fetchContents = async () => {
    const _contents = await RemoteApi.fetchContents();

    if (this._isMounted) {
      this.setState({localContents: _contents});
    }
  };

  _fetchQuestions = async () => {
    const _questions = await RemoteApi.fetchQuestions();

    if (this._isMounted) {
      this.setState({localQuestions: _questions});
    }
  };

  _toggleQuizzModal = () => {
    this.setState({isResultModalVisible: !this.state.isQuizzModalVisible});
  };

  _toggleResultModal = () => {
    this.setState({isResultModalVisible: !this.state.isResultModalVisible});
  };

  _toggleResultModalIfNeeded = () => {
    console.log('Closing.');

    if (this.state.needResultModal) {
      this.setState({needResultModal: false});

      this._toggleResultModal();
    }
  };

  _onFinishedQuizz = responses => {
    this._toggleQuizzModal();

    this.setState({needResultModal: true});
  };

  _onOrder = () => {
    this._toggleResultModal();
    this.props.navigation.navigate('TunnelProductSelect');
  };

  _renderContentCards = () => {
    return this.state.localContents.map((item, key) => {
      return <ContentCard key={key} item={item} />;
    });
  };

  render() {
    return (
      <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.safeAreaViewInner, {flex: 1}]}>
          <TopMenu />

          <ScrollView style={{flex: 0.9}}>
            {this._renderContentCards()}

            <ContactButton />

            <CustomFooter />
          </ScrollView>

          <QuizzButton onClick={this._toggleQuizzModal} />
        </View>
        <Modal
          visible={this.state.isQuizzModalVisible}
          isVisible={this.state.isQuizzModalVisible}
          style={{margin: 0, alignItems: undefined, justifyContent: undefined}}
          onModalHide={this._toggleResultModalIfNeeded}
          onDismiss={this._toggleResultModalIfNeeded}
          animationType="slide"
          transparent={true}>
          <View
            style={{
              flex: 1,
              marginBottom: 25,
              marginRight: 25,
              marginLeft: 25,
              marginTop: 35,
              borderRadius: 7,
              borderColor: '#000000',
              position: 'relative',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 10, zIndex: 10}}
              onPress={this._toggleQuizzModal}>
              <View style={{}}>
                <Image
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                  source={require('../assets/pictures/close.png')}
                />
              </View>
            </TouchableOpacity>

            <QuizzScreen
              onFinishedQuizz={this._onFinishedQuizz}
              questions={this.state.localQuestions}
            />
          </View>
        </Modal>
        <Modal
          visible={this.state.isResultModalVisible}
          isVisible={this.state.isResultModalVisible}
          onModalHide={this._toggleResultModalIfNeeded}
          onDismiss={this._toggleResultModalIfNeeded}
          style={{margin: 0, alignItems: undefined, justifyContent: undefined}}
          animationType="slide"
          transparent={true}>
          <View
            style={{
              flex: 1,
              marginBottom: 25,
              marginRight: 25,
              marginLeft: 25,
              marginTop: 35,
              borderRadius: 7,
              borderColor: '#000000',
              position: 'relative',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 10, zIndex: 10}}
              onPress={this._toggleResultModal}>
              <View style={{}}>
                <Image
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                  source={require('../assets/pictures/close.png')}
                />
              </View>
            </TouchableOpacity>

            <QuizzFinishScreen onOrder={this._onOrder} />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
