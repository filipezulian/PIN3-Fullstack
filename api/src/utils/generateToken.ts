import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('THERE IS SOMETHING WRONG WITH THE .ENV');
  }

  const userPayload = {
    sub: 1,
    name: 'admin',
    email: 'admin',
  };

  const token = jwt.sign(userPayload, secret, {
    expiresIn: '1d',
  });

  console.log('Generated JWT Token:', token);
};

generateToken();