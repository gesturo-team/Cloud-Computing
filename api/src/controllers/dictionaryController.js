import db from '../configs/database.js';

async function alphabet(req, res) {
  try {
    const mainDoc = await db.collection('dictionary').doc('alphabet').get();
    const mainData = mainDoc.data();

    if (!mainData) {
      return res.status(404).json({
        success: false,
        message: 'Dictionary failed to obtain.',
      });
    }

    const snapshotAlphabet = await db
      .collection('dictionary')
      .doc('alphabet')
      .collection('wordList')
      .get();
    const wordList = snapshotAlphabet.docs.map((doc) => {
      const data = doc.data();
      return {
        _id: doc.id,
        value: data.value,
        urlImage: data.urlImage,
        description: data.description,
      };
    });

    wordList.sort((a, b) => a.value.localeCompare(b.value));

    return res.status(200).json({
      success: true,
      message: 'Dictionary alphabet obtained successfully',
      data: {
        _id: mainDoc.id,
        type: mainData.type,
        createdAt: mainData.createdAt,
        updatedAt: mainData.updatedAt,
        wordList: wordList,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: error.message,
    });
  }
}

async function number(req, res) {
  try {
    const mainDoc = await db.collection('dictionary').doc('number').get();
    const mainData = mainDoc.data();

    if (!mainData) {
      return res.status(404).json({
        success: false,
        message: 'Dictionary failed to obtain.',
      });
    }

    const snapshotNumber = await db
      .collection('dictionary')
      .doc('number')
      .collection('wordList')
      .get();
    const wordList = snapshotNumber.docs.map((doc) => {
      const data = doc.data();
      return {
        _id: doc.id,
        value: data.value,
        urlImage: data.urlImage,
        description: data.description,
      };
    });

    wordList.sort((a, b) => a.value - b.value);

    return res.status(200).json({
      success: true,
      message: 'Dictionary number obtained successfully',
      data: {
        _id: mainDoc.id,
        type: mainData.type,
        createdAt: mainData.createdAt,
        updatedAt: mainData.updatedAt,
        wordList: wordList,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: error.message,
    });
  }
}

export default {
  alphabet,
  number,
};
