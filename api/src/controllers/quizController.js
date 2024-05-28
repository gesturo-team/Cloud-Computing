import db from '../configs/database.js';

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
        isCorrect: false,
      }));

      const answers = [
        { value: data.value, isCorrect: true },
        ...incorrectAnswers,
      ].sort(() => 0.5 - Math.random());

      return {
        question: data.value,
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
        status: 'success',
        data: data,
      });
    } else {
      return res.status(400).json({
        status: 'fail',
        message: 'Quiz failed to obtain',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
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
        isCorrect: false,
      }));

      const answers = [
        { value: data.value, isCorrect: true },
        ...incorrectAnswers,
      ].sort(() => 0.5 - Math.random());

      return {
        question: data.value,
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
        status: 'success',
        data: data,
      });
    } else {
      return res.status(400).json({
        status: 'fail',
        message: 'Quiz failed to obtain',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
}

async function createQuiz(req, res) {
  try {
    const { questions, idUser, type } = req.body;

    const userId = idUser;
    const userRef = db.collection('users').doc(userId);
    const userSnapshot = await userRef.get();

    if (!Array.isArray(questions) || questions.length === 0) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Quiz failed to submit' });
    }

    if (!userSnapshot.exists) {
      console.error('User not found:', userId);
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    const quizRef = userRef.collection('quiz').doc();

    const quiz = {
      score: '',
      type: type,
      questions: questions.map((question) => ({
        question: question.question,
        urlImage: question.urlImage || '',
        userAnswer: question.userAnswer || '',
        answers: question.answers,
      })),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await quizRef.set(quiz);

    return res.status(200).json({
      status: 'success',
      message: 'Quiz inserted successfully',
    });
  } catch (error) {
    console.error('Error inserting quiz:', error);
    return res
      .status(500)
      .json({ status: 'fail', message: 'Internal Server Error' });
  }
}

async function getQuizById(req, res) {
  try {
    const { id: idQuiz } = req.params;
    const idUser = '';

    const quizRef = db
      .collection('users')
      .doc('')
      .collection('quiz')
      .doc(idQuiz);

    const quizSnapshot = await quizRef.get();
    const quizData = quizSnapshot.data();

    if (!quizSnapshot.exists) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Quiz failed to obtain' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Quuiz obtain successfully',
      data: quizData,
    });
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return res
      .status(500)
      .json({ status: 'fail', message: 'Internal Server Error' });
  }
}

async function getQuizHistory(req, res) {
  try {
    const { id: idUser } = req.params;

    const userRef = db.collection('users').doc(idUser);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    const quizSnapshot = await userRef.collection('quiz').get();
    const quizData = quizSnapshot.docs.map((doc) => doc.data());

    return res.status(200).json({
      status: 'success',
      message: 'Quiz history obtain successfully',
      data: {
        id: userSnapshot.data().id,
        email: userSnapshot.data().email,
        firstName: userSnapshot.data().firstName,
        lastName: userSnapshot.data().lastName,
        createdAt: userSnapshot.data().createdAt,
        updatedAt: userSnapshot.data().updatedAt,
        quiz: [...quizData],
      },
    });
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    return res
      .status(500)
      .json({ status: 'fail', message: 'Internal Server Error' });
  }
}

export default {
  getQuizAlphabet,
  getQuizNumber,
  getQuizById,
  createQuiz,
  getQuizHistory,
};
