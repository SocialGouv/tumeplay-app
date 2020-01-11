import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../styles/Styles';

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

  useEffect(() => {
    setQuestions(props.questions);
    setTotal(props.questions.length);
  }, [props.questions]);

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayAnswer(false);
    setIsRightAnswer(false);
  }, [props.resetQuestions]);

  function _answerQuestion(key) {
    const currentQuestion = questions[currentIndex];
    const localAnswer = {
      questionId: currentQuestion.id,
      givenAnswer: currentQuestion.answers[key].id,
    };
    setIsRightAnswer(
      currentQuestion.answers[key].id == currentQuestion.rightAnswer,
    );
    setDisplayAnswer(!displayAnswer);
    setGivenAnswers(prevState => ({...prevState, localAnswer}));
  }

  function _nextQuestion() {
    if (currentIndex + 1 >= total) {
      props.onFinishedQuizz(givenAnswers);
    } else {
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
      source={_currentQuestion.background}>
      <View style={Styles.flexOne}>
        <View style={{flex: 0.5}}></View>
        <View style={{flex: 1.75}}>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <Text style={Styles.questionText}>{_currentQuestion.question}</Text>
          </View>
        </View>

        <View style={{flex: 2}}>
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

        <View style={{flex: 2}}></View>

        <View style={{position: 'absolute', bottom: 15, width: '100%'}}>
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
      </View>
    </ImageBackground>
  );
}
