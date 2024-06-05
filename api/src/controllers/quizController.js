import db from '../configs/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

function getRandomSample(arr, n) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, n);
}

async function getQuizAlphabet(req, res) {
  try {
    const dictionaryAlphabet = db.collection('dictionary').doc('alphabet');
    const dictionaryWordlistSnapshot = await dictionaryAlphabet
      .collection('wordList')
      .get();

    const dictionaryWordlist = dictionaryWordlistSnapshot.docs.map((doc) =>
      doc.data()
    );

    const sampledWordlist = getRandomSample(dictionaryWordlist, 10);

    const questions = sampledWordlist.map((data) => {
      const incorrectAnswers = getRandomSample(
        dictionaryWordlist.filter((item) => item.value !== data.value),
        3
      ).map((item) => ({
        value: item.value,
        correct: false,
      }));

      const answers = [
        { value: data.value, correct: true },
        ...incorrectAnswers,
      ].sort(() => 0.5 - Math.random());

      return {
        question: data.value,
        correct: false,
        urlImage: data.urlImage,
        userAnswer: '',
        answers: answers,
      };
    });

    if (questions.length === 10) {
      const data = {
        score: '0',
        type: 'alphabet',
        questions: questions,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return res.status(200).json({
        success: true,
        data: data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Quiz failed to obtain',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function getQuizNumber(req, res) {
  try {
    const dictionaryNumber = db.collection('dictionary').doc('number');
    const dictionaryWordlistSnapshot = await dictionaryNumber
      .collection('wordList')
      .get();

    const dictionaryWordlist = dictionaryWordlistSnapshot.docs.map((doc) =>
      doc.data()
    );

    const sampledWordlist = getRandomSample(dictionaryWordlist, 10);

    const questions = sampledWordlist.map((data) => {
      const incorrectAnswers = getRandomSample(
        dictionaryWordlist.filter((item) => item.value !== data.value),
        3
      ).map((item) => ({
        value: item.value,
        correct: false,
      }));

      const answers = [
        { value: data.value, correct: true },
        ...incorrectAnswers,
      ].sort(() => 0.5 - Math.random());

      return {
        question: data.value,
        correct: false,
        urlImage: data.urlImage,
        userAnswer: '',
        answers: answers,
      };
    });

    if (questions.length === 10) {
      const data = {
        score: '0',
        type: 'number',
        questions: questions,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return res.status(200).json({
        success: true,
        data: data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Quiz failed to obtain',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function createQuiz(req, res) {
  try {
    const { questions, type } = req.body;
    const idUser = req.user_id;
    const userRef = db.collection('users').doc(idUser);
    const userSnapshot = await userRef.get();

    if (!Array.isArray(questions) || questions.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: 'Quiz failed to submit' });
    }

    if (!userSnapshot.exists) {
      console.error('User not found:', idUser);
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    const quizRef = userRef.collection('quiz').doc();
    let correctAnswersCount = 0;

    const quizQuestions = questions.map((question) => {
      const correct = question.answers.some(
        (answer) => answer.correct && answer.value === question.userAnswer
      );
      if (correct) {
        correctAnswersCount += 1;
      }

      return {
        question: question.question,
        correct: correct,
        urlImage: question.urlImage || '',
        userAnswer: question.userAnswer || '',
        answers: question.answers,
      };
    });

    const score = correctAnswersCount;

    const quiz = {
      score: score.toString(),
      type: type,
      questions: quizQuestions,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await quizRef.set(quiz);

    return res.status(200).json({
      success: true,
      message: 'Quiz inserted successfully',
      quiz,
    });
  } catch (error) {
    console.error('Error inserting quiz:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function getQuizById(req, res) {
  try {
    const { id: idQuiz } = req.params;
    const idUser = req.user_id;

    const quizRef = db
      .collection('users')
      .doc(idUser)
      .collection('quiz')
      .doc(idQuiz);

    const quizSnapshot = await quizRef.get();
    if (!quizSnapshot.exists) {
      return res
        .status(404)
        .json({ success: false, message: 'Quiz not found' });
    }

    const quizData = quizSnapshot.data();
    return res.status(200).json({
      success: true,
      message: 'Quiz obtained successfully',
      data: {
        id: idQuiz,
        ...quizData,
      },
    });
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function getQuizHistory(req, res) {
  try {
    const idUser = req.user_id;

    const userRef = db.collection('users').doc(idUser);
    const user = await userRef.get();
    const query = req.query;

    if (!user.exists) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    const quizSnapshot = await userRef.collection('quiz').get();
    const quizData = quizSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (query.count) {
      const count = parseInt(query.count, 10);
      if (Number.isInteger(count)) {
        const quizDataSort = quizData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        return res.status(200).json({
          success: true,
          message: 'Quiz history obtain successfully',
          data: {
            id: user.data().id,
            email: user.data().email,
            firstName: user.data().firstName,
            lastName: user.data().lastName,
            createdAt: user.data().createdAt,
            updatedAt: user.data().updatedAt,
            quiz: quizDataSort.slice(0, count),
          },
        });
      }
    } else {
      const quizDataSort = quizData.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      return res.status(200).json({
        success: true,
        message: 'Quiz history obtain successfully',
        data: {
          id: user.data().id,
          email: user.data().email,
          firstName: user.data().firstName,
          lastName: user.data().lastName,
          createdAt: user.data().createdAt,
          updatedAt: user.data().updatedAt,
          quiz: [...quizDataSort],
        },
      });
    }
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

export default {
  getQuizAlphabet,
  getQuizNumber,
  getQuizById,
  createQuiz,
  getQuizHistory,
};
