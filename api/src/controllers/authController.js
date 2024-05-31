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
        status: 'fail',
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
      status: 'success',
      message: 'User registered successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
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
        status: 'fail',
        message: 'Invalid email or password.',
      });
    }

    const userDoc = userSnapshot.docs[0];
    const user = userDoc.data();

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid email or password.',
      });
    }

    const token = jwt.sign({ id: userDoc.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.status(200).json({
      status: 'success',
      message: 'User logged in successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error.',
      error: error.message,
    });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie('token');
    return res.status(200).json({
      status: 'success',
      message: 'User logged out successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
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
