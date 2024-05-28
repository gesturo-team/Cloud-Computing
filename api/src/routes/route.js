import express from 'express';
import quizController from '../controllers/quizController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Quiz
router.get('/quiz/alphabet', quizController.getQuizAlphabet);
router.get('/quiz/number', quizController.getQuizNumber);
router.post('/quiz', quizController.createQuiz);

export default router;
