import { Request, Response, NextFunction } from 'express';
import { AppError } from '@config/AppError';
import jwt from 'jsonwebtoken';

export const Authenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  if (request.originalUrl.includes('/login')) {
    return next();
  }

  let token = request.headers.authorization;
  const tokenHeader = request.cookies?.accessToken;
  token = token ?? tokenHeader;

  if (!token) {
    throw new AppError('Invalid Token, please login', 401);
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  try {
    const secret = process.env.JWT_SECRET! ?? 'RbXAiM0'
    const decoded = jwt.verify(token, secret) as any;
    request.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    throw new AppError('Invalid Token, please login', 401);
  }
};