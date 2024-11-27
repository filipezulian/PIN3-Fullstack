import { Router } from 'express';

const RegisterPaths = ({ paths }: { paths: any[] }) => {
  const routes = Router();

  paths.forEach((path) => {
    if (!path.handlers || typeof path.handlers !== 'function') {
      throw new Error(`Handler for route ${path.url} is not a function`);
    }

    switch (path.method) {
      case 'GET':
        routes.get(path.url, ...path.middlewares, path.handlers);
        break;
      case 'POST':
        routes.post(path.url, ...path.middlewares, path.handlers);
        break;
      case 'DELETE':
        routes.delete(path.url, ...path.middlewares, path.handlers);
        break;
      case 'PUT':
        routes.put(path.url, ...path.middlewares, path.handlers);
        break;
      default:
        throw new Error(`Unsupported method ${path.method} for route ${path.url}`);
    }
  });

  return routes;
};

export { RegisterPaths };
