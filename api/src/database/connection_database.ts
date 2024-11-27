import { AppError } from '@config/AppError';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  try {
    const defaultOptions = await getConnectionOptions();
    return createConnection(Object.assign(defaultOptions, {}));
  } catch (error) {
    console.log(error)
    throw new AppError('Internal Server Error', 500)
  }
};
