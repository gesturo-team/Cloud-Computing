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

export default { getQuizAlphabet, getQuizNumber };