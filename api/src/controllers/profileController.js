import jwt from 'jsonwebtoken';
import db from '../configs/database.js';

async function getProfile(req, res) {
  try {
    const userId = req.user_id;

    const token = req.cookies.token;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const idUser = user.id;

    if (idUser !== userId) {
      return res.status(403).json({
        status: 'fail',
        message: 'Forbidden.',
      });
    }

    const userRef = db.collection('users').doc(userId);
    const userData = await userRef.get();

    return res.status(200).json({
      status: 'success',
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
      status: 'fail',
      message: 'Internal server error.',
    });
  }
}

export default { getProfile };
