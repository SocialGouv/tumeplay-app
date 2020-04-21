import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../styles/Styles';
import {EventRegister} from 'react-native-event-listeners';

import UserService from '../services/User';
import Tracking from '../services/Tracking';
import AnswerScreen from './components/quizz/AnswerScreen';
import NextButton from './components/quizz/NextButton';
import AnswerButton from './components/quizz/AnswerButton';

QuizzScreen.propTypes = {
  questions: PropTypes.array,
  resetQuestions: PropTypes.bool,
  onFinishedQuizz: PropTypes.func,
};

export default function QuizzScreen(props) {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [givenAnswers, setGivenAnswers] = useState([]);

  const _currentQuestion = questions[currentIndex];

  var questionTimer = Math.floor(Date.now() / 1000);

  useEffect(() => {
    setQuestions(props.questions);
    setTotal(props.questions.length);
  }, [props.questions]);

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayAnswer(false);
    setIsRightAnswer(false);
  }, [props.resetQuestions]);

  async function _addTokens(_tokenAmount) {
    const _newTokens = await UserService.addTokens(_tokenAmount);
    const updateResultOfBadge = await UserService.updateToLatestBadge();
    console.log('Updated result of badge:', updateResultOfBadge);

    EventRegister.emit('tokensAmountChanged', _newTokens);
  }

  function _getTokenAmount(question, givenAnswer) {
    let _tokenAmount = 25;

    if (givenAnswer == question.rightAnswer) {
      _tokenAmount = 100;
    }

    if (givenAnswer == question.neutralAnswer) {
      _tokenAmount = 30;
    }

    return _tokenAmount;
  }

  function _answerQuestion(key) {
    questionTimer = Math.floor(Date.now() / 1000) - questionTimer;

    const currentQuestion = questions[currentIndex];

    Tracking.questionAnswered(currentQuestion.id, questionTimer);

    const localAnswer = {
      questionId: currentQuestion.id,
      givenAnswer: currentQuestion.answers[key].id,
    };
    setIsRightAnswer(
      currentQuestion.answers[key].id == currentQuestion.rightAnswer,
    );
    setDisplayAnswer(!displayAnswer);
    setGivenAnswers(prevState => ({...prevState, localAnswer}));

    const _tokenAmount = _getTokenAmount(
      currentQuestion,
      currentQuestion.answers[key].id,
    );

    _addTokens(_tokenAmount);
  }

  function _nextQuestion() {
    if (currentIndex + 1 >= total) {
      props.onFinishedQuizz(givenAnswers);
    } else {
      questionTimer = Math.floor(Date.now() / 1000);

      setCurrentIndex(currentIndex + 1);
      setIsRightAnswer(false);
      setDisplayAnswer(!displayAnswer);
    }
  }

  function _renderAnswersButtons(answers) {
    return answers.map((item, key) => {
      return (
        <AnswerButton
          item={item}
          questionKey={key}
          key={key}
          onPress={() => _answerQuestion(key)}
        />
      );
    });
  }

  if (_currentQuestion === undefined) {
    return <View></View>;
  }
  return (
    <ImageBackground
      imageStyle={{borderRadius: 7}}
      style={{width: '100%', height: '100%'}}
      source={
        _currentQuestion.background ? _currentQuestion.background : undefined
      }>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 50,
            marginBottom: 40,
            alignSelf: 'center',
            height: '20%',
          }}>
          <Text style={Styles.questionText}>{_currentQuestion.question}</Text>
        </View>

        <View style={{paddingBottom: 50, height: '52%'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            {!displayAnswer && _currentQuestion.answers.length <= 2 && (
              <View style={Styles.flexOne}></View>
            )}
            {!displayAnswer && _renderAnswersButtons(_currentQuestion.answers)}
            {!displayAnswer && _currentQuestion.answers.length <= 2 && (
              <View style={Styles.flexOne}></View>
            )}

            {displayAnswer && (
              <AnswerScreen
                isRightAnswer={isRightAnswer}
                question={_currentQuestion}
              />
            )}
          </View>
        </View>

        <View
          style={[
            {textAlign: 'center', paddingBottom: 10},
            displayAnswer
              ? {}
              : {position: 'absolute', bottom: 5, width: '100%'},
          ]}>
          {displayAnswer && <NextButton onPress={_nextQuestion} />}

          <Text
            style={{
              marginTop: 0,
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            {currentIndex + 1} / {total}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
