import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../configs/database.js';

async function register(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const existingEmailSnapshot = await db
      .collection('users')
      .where('email', '==', email)
      .get();

    if (!existingEmailSnapshot.empty) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists.',
      });
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      createdAt: createdAt,
      updatedAt: updatedAt,
    };

    await db.collection('users').add(newUser);
    return res.status(201).json({
      success: true,
      message: 'User registered successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: error.message,
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const userSnapshot = await db
      .collection('users')
      .where('email', '==', email)
      .get();

    if (userSnapshot.empty) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const userDoc = userSnapshot.docs[0];
    const user = userDoc.data();

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const token = jwt.sign({ id: userDoc.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return res.status(200).json({
      success: true,
      message: 'User logged in successfully.',
      authResult: {
        id: userDoc.id,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        token: token,
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

async function logout(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: 'User logged out successfully.',
      token: null,
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
  register,
  login,
  logout,
};
