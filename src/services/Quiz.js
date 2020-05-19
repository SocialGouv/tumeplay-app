const QuizAmount = {
  getTokenAmount(question, givenAnswer) {
    let tokenAmount = 25;

    if (givenAnswer === question.rightAnswer) {
      tokenAmount = 100;
    }

    if (givenAnswer === question.neutralAnswer) {
      tokenAmount = 30;
    }

    return tokenAmount;
  },
};
export default QuizAmount;
