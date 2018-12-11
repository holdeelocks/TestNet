export {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  register,
  login,
} from './loginActions';

export {
  QUIZZES_REQUEST,
  QUIZZES_SUCCESS,
  QUIZZES_FAILURE,
  QUIZZ_REQUEST,
  QUIZZ_SUCCESS,
  QUIZZ_FAILURE,
  POST_QUIZZ_REQUEST,
  POST_QUIZZ_SUCCESS,
  POST_QUIZZ_FAILURE,
  PATCH_QUIZZ_FAILURE,
  PATCH_QUIZZ_REQUEST,
  PATCH_QUIZZ_SUCCESS,
  DELETE_QUIZZ_REQUEST,
  DELETE_QUIZZ_SUCCESS,
  DELETE_QUIZZ_FAILURE,
  TOPICS_REQUEST,
  TOPICS_SUCCESS,
  TOPICS_FAILURE,
  QUESTIONS_REQUEST,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE,
  POST_QUESTION_REQUEST,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
  PATCH_QUESTION_FAILURE,
  PATCH_QUESTION_REQUEST,
  PATCH_QUESTION_SUCCESS,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  getQuizzes,
  getQuizz,
  getTopics,
  postQuizz,
  updateQuizz,
  deleteQuizz,
  getQuestions,
  postQuestion,
  updateQuestion,
  deleteQuestion,
} from './quizzActions';

export {
POSTS_SUCCESS,
POSTS_FAILURE,
POSTS_REQUEST,
POST_REQUEST,
POST_SUCCESS,
POST_FAILURE,
COMMENTS_REQUEST,
COMMENTS_SUCCESS,
COMMENTS_FAILURE,
COMMENT_REQUEST,
COMMENT_SUCCESS,
COMMENT_FAILURE,
getPosts,
getPost,
getComments,
getComment,
} from './postActions';