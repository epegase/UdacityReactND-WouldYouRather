import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getPolls() {
  return _getQuestions();
}

export function getUsers() {
  return _getUsers();
}

/* const allPromise = Promise.all([_getUsers(), _getQuestions()]);

export function getInitialLoad() {
  return allPromise.then(([users, polls]) => ({
    users,
    polls,
  }));
} */

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
