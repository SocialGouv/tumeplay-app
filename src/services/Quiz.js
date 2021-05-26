import QuizzButton from '../screens/components/content/QuizzButton';
import Storage from './Storage';

const QuizzService = {
  storageKey: 'quizzUserData',
  currentQuestions: [],
  toImproveIds: [],
  doneIds: [],
  answersPoints: {
    WRONG: 25,
    RIGHT: 100,
    NEUTRAL: 30,
  },
  getTokenAmount(isRight, isNeutral) {
    let tokenAmount = QuizzService.answersPoints.WRONG;

    if (isRight) {
      tokenAmount = QuizzService.answersPoints.RIGHT;
    } else if (isNeutral) {
      tokenAmount = QuizzService.answersPoints.NEUTRAL;
    }

    return tokenAmount;
  },
  retrieveUserData: async () => {
    let userData = await Storage.get(QuizzService.storageKey);

    if (userData) {
      userData = JSON.parse(userData);
      QuizzService.toImproveIds = userData.toImproveIds;
      QuizzService.doneIds = userData.doneIds;
    }
  },
  saveUserData: async () => {
    await Storage.set(
      QuizzService.storageKey,
      JSON.stringify({
        toImproveIds: QuizzService.toImproveIds,
        doneIds: QuizzService.doneIds,
      }),
    );
  },
  setQuestions: currentQuestions => {
    QuizzService.currentQuestions = currentQuestions;
  },
  getQuestions: () => {
    let selectedQuestions = [];
    const undoneQuestions = QuizzService.currentQuestions.filter(
      _ => !QuizzService.doneIds.includes(_.id),
    );
    const questionIds = undoneQuestions.map(_ => _.id);
    const tmpToImproveIds = QuizzService.toImproveIds.filter(_ =>
      questionIds.includes(_),
    );
    selectedQuestions = undoneQuestions.filter(
      question => !tmpToImproveIds.includes(question.id),
    );

    selectedQuestions = QuizzService.shuffleArray(selectedQuestions);
    if (selectedQuestions.length >= 10 - tmpToImproveIds.length) {
      selectedQuestions = selectedQuestions.splice(
        0,
        10 - tmpToImproveIds.length,
      );
    }

    if (tmpToImproveIds.length > 0) {
      const tmpToImprove = undoneQuestions.filter(_ =>
        tmpToImproveIds.includes(_.id),
      );
      selectedQuestions = selectedQuestions.concat(
        selectedQuestions,
        tmpToImprove,
      );
    }

    return selectedQuestions;
  },
  moveQuestion: (question, isRightAnswer) => {
    if (isRightAnswer) {
      QuizzService.doneIds.push(question.id);
    } else {
      QuizzService.toImproveIds.push(question.id);
    }
    QuizzService.saveUserData();
  },
  shuffleArray: array => {
    let i = array.length - 1;

    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },
};

QuizzService.retrieveUserData();

export default QuizzService;
