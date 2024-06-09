import db from '../configs/database.js';

async function getDictionary(req, res) {
  const { type } = req.params;

  try {
    const mainDoc = await db.collection('dictionary').doc(type).get();
    const mainData = mainDoc.data();

    if (!mainData) {
      return res.status(404).json({
        success: false,
        message: 'Dictionary failed to obtain.',
      });
    }

    const snapshotAlphabet = await db
      .collection('dictionary')
      .doc(type)
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
      message: `Dictionary ${type} obtained successfully`,
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

async function getDictionaryDetails(req, res) {
  try {
    const { type, word } = req.params;

    const snapshot = await db
      .collection('dictionary')
      .doc(type)
      .collection('wordList')
      .where('value', '==', word)
      .get();

    if (snapshot.empty) {
      return res.status(404).json({
        success: false,
        message: 'Dictionary detail failed to obtain.',
      });
    }

    const data = snapshot.docs[0].data();

    return res.status(200).json({
      success: true,
      message: 'Dictionary detail obtained successfully',
      data: {
        _id: snapshot.docs[0].id,
        value: data.value,
        urlImage: data.urlImage,
        description: data.description,
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
  getDictionary,
  getDictionaryDetails,
};
