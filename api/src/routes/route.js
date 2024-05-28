import express from 'express';
import authController from '../controllers/authController.js';
import dictionaryController from '../controllers/dictionaryController.js';

import auth from '../midlewares/auth.js';

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.send('Hello World!');
});

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Dictionary routes
router.get('/dictionary/alphabet', auth, dictionaryController.alphabet);
router.get('/dictionary/number', auth, dictionaryController.number);

export default router;
