export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const addQuestionToUser = (questionId, userId) => {
  return {
    type: ADD_QUESTION_TO_USER,
    questionId,
    userId,
  };
};

export const addAnswerToUser = (userId, questionId, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    userId,
    questionId,
    answer,
  };
};
