const FeedbacksAPI = {
  sendFeedback: async feedback => {
    console.log(feedback)
    await fetch('http://localhost:1337/feedbacks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: feedback.title,
        body: feedback.comment,
        isLiked: feedback.isLiked,
        isDisliked: feedback.isDisliked,
        question: feedback.questionContentId,
      }),
    });
  },
};

export default FeedbacksAPI;
