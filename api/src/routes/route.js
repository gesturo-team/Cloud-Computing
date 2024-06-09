import express from 'express';
import quizController from '../controllers/quizController.js';
import authController from '../controllers/authController.js';
import dictionaryController from '../controllers/dictionaryController.js';
import profileController from '../controllers/profileController.js';

import auth from '../middlewares/auth.js';
import { userRegisterValidationRules } from '../rules/userRegisterValidation.js';
import { userLoginValidationRules } from '../rules/userLoginValidation.js';
import { validate } from '../middlewares/validation.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', auth, (req, res) => {
  res.send('Hello World!');
});

// Quiz
router.get('/quizzes/type/:type', auth, quizController.getQuiz);
router.get('/quizzes/history/', auth, quizController.getQuizHistory);
router.get('/quizzes/:id', auth, quizController.getQuizById);
router.post('/quizzes', auth, quizController.createQuiz);

// Auth routes
router.post(
  '/register',
  upload.none(),
  userRegisterValidationRules(),
  validate,
  authController.register
);
router.post(
  '/login',
  upload.none(),
  userLoginValidationRules(),
  validate,
  authController.login
);
router.post('/logout', authController.logout);

// Profile routes
router.get('/profile', auth, profileController.getProfile);

// Dictionary routes
router.get('/dictionary/alphabet', auth, dictionaryController.alphabet);
router.get('/dictionary/number', auth, dictionaryController.number);

export default router;
