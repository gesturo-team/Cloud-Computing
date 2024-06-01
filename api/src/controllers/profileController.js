import jwt from 'jsonwebtoken';
import db from '../configs/database.js';

async function getProfile(req, res) {
  try {
    const userId = req.user_id;

    const userRef = db.collection('users').doc(userId);
    const userData = await userRef.get();

    if (!userData) {
      return res.status(400).json({
        success: false,
        message: 'User failed to obtain',
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: userData.id,
        fullName: `${userData.data().firstName} ${userData.data().lastName}`,
        firstName: userData.data().firstName,
        lastName: userData.data().lastName,
        email: userData.data().email,
        createdAt: userData.data().createdAt,
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

export default { getProfile };
