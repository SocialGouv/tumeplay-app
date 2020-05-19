import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';

import QuizzAnswerStyle from '../../../styles/components/QuizzAnswer';
import ExpandableText from '../global/ExpandableText';
import useIsMounted from '../../../hooks/isMounted';
import Tracking from '../../../services/Tracking';

AnswerScreen.propTypes = {
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  lastTokenAmount: PropTypes.number,
};

export default function AnswerScreen(props) {
  const [content, setContent] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const _currentQuestion = props.question;
  const _isRightAnswer = props.isRightAnswer;
  const isMounted = useIsMounted();

  useEffect(() => {
    setContent({
      text: _currentQuestion.explanation,
      numberOfLines: 3,
    });
  }, [_currentQuestion.explanation, isMounted]);

  let _rightAnswer = _currentQuestion.answers.filter(
    _rightAnswer => _rightAnswer.id === _currentQuestion.rightAnswer,
  );

  if (_rightAnswer === undefined || _rightAnswer.length === 0) {
    _rightAnswer = '';
  } else {
    _rightAnswer = _rightAnswer[0].text;
  }

  const rightAnswerPicture = require('../../../assets/pictures/answer.right.png');
  const wrongAnswerPicture = require('../../../assets/pictures/answer.wrong.png');
  var currentPicture = false;
  var localStyle = {};
  var localTextStyle = {};

  if (_isRightAnswer) {
    currentPicture = rightAnswerPicture;
    localStyle = {borderColor: '#FF6A00'};
    localTextStyle = {color: '#FF6A00'};
  } else {
    currentPicture = wrongAnswerPicture;
  }

  return (
    <View style={{flex: 6, flexGrow: 1}}>
      {_rightAnswer !== '' && (
        <View style={[Styles.rightAnswerButton, localStyle]}>
          <View style={[QuizzAnswerStyle.pictureAndTextWrapper]}>
            <View style={{flex: 0.2, maxWidth: 50, justifyContent: 'center'}}>
              <Image
                style={QuizzAnswerStyle.checkPicture}
                source={currentPicture}
              />
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Text
                style={[
                  Styles.rightAnswerButtonText,
                  {fontSize: 15},
                  localTextStyle,
                ]}>
                {_rightAnswer}
              </Text>
            </View>
            <View style={{
            		transform: [{ rotate: "15deg" }], 
            		position: 'absolute', 
            		right: -12, 
            		top: -10, 
            		paddingLeft: 7, 
            		paddingRight: 7, 
            		paddingTop: 2, 
            		paddingBottom: 2, 
            		borderRadius: 5, 
            		borderWidth: 1, 
            		backgroundColor: '#FFFFFF', 
            		borderColor: '#C80351',
		            shadowColor: '#666666',
				    shadowOffset: {width: 1, height: 1},
				    shadowOpacity: 0.5,
				    shadowRadius: 8
		  	}}>
              <Text style={{ fontFamily: Colors.textFont, fontSize: 12, color: '#C80351' }}>+ { props.lastTokenAmount }</Text>
            </View>
        
          </View>
        </View>
      )}
      <View style={[QuizzAnswerStyle.explanationWrapper, {flexGrow: 1}]}>
        <TouchableOpacity
          style={[QuizzAnswerStyle.explanationInnerWrapper, {flexGrow: 1}]}
          onPress={() => {
            Tracking.knowMoreTriggered('question', content.id);
            setIsExpanded(!isExpanded);
          }}>
          <ExpandableText
            containerStyle={{backgroundColor: '#FFFFFF', borderRadius: 7}}
            content={content}
            isExpanded={isExpanded}
            textStyle={{marginTop: 0}}
            readMoreStyle={{color: '#D13E72'}}
            purpleMode={true}
            lessPicture={'minus-purple.png'}
            morePicture={'plus-purple.png'}
            onReadMore={() => {
              Tracking.knowMoreTriggered('question', content.id);
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
