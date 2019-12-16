import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';

import QuizzAnswerStyle from '../../../styles/components/QuizzAnswer';

AnswerScreen.propTypes = {
  question: PropTypes.object,
};

export default function AnswerScreen(props) {
  const _currentQuestion = props.question;
  let _rightAnswer = _currentQuestion.answers.filter(
    _rightAnswer => _rightAnswer.id == _currentQuestion.rightAnswer,
  );

  if (_rightAnswer === undefined || _rightAnswer.length == 0) {
    _rightAnswer = '';
  } else {
    _rightAnswer = _rightAnswer[0].text;
  }

  return (
    <View style={{flex: 2}}>
      {_rightAnswer != '' && (
        <View style={Styles.rightAnswerButton}>
          <View style={Styles.wrongAnswerButtonInnerWrapper}>
            <View style={Styles.rightAnswerButtonIconWrapper}>
              <Image
                style={QuizzAnswerStyle.checkPicture}
                source={require('../../../assets/pictures/check.png')}
              />
            </View>
            <Text style={[Styles.rightAnswerButtonText, {fontSize: 15}]}>
              {_rightAnswer}
            </Text>
          </View>
        </View>
      )}
      <View style={QuizzAnswerStyle.explanationWrapper}>
        <View style={QuizzAnswerStyle.explanationInnerWrapper}>
          <Text style={QuizzAnswerStyle.explanationTextWrapper}>
            {_currentQuestion.explanation}
          </Text>
          <TouchableOpacity
            style={{
              flex: 0.5,
              marginBottom: 5,
              marginTop: 10,
              paddingLeft: 15,
              padding: 5,
              flexDirection: 'row',
              borderWidth: 0,
              borderRadius: 7,
              minHeight: 20,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Image
                style={QuizzAnswerStyle.plusPicture}
                source={require('../../../assets/pictures/plus.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  color: Colors.mainButton,
                }}>
                En savoir plus
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
