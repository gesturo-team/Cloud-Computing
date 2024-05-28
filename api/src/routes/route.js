import express from 'express';
import quizController from '../controllers/quizController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Quiz
router.get('/quiz/alphabet', quizController.getQuizAlphabet);
router.get('/quiz/number', quizController.getQuizNumber);
router.get('/quiz/:id', quizController.getQuizById);
router.get('/quiz/history/:id', quizController.getQuizHistory);
router.post('/quiz', quizController.createQuiz);

export default router;
