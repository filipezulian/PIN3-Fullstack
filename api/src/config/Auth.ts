import dotenv from 'dotenv';
dotenv.config();

export default {
    secret_token: process.env.JWT_SECRET ?? 'RbXAiM0',
    expires_in_token: '1d',
    secret_refresh_token: process.env.REFRESH_SECRET ?? '8531015fdb7f163cbbe866e74cdd1a2ee0b41',
    expires_in_refresh_token: '1d',
    expires_refresh_token_days: 1,
  };
  