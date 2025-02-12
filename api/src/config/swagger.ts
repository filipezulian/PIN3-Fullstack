import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'REST API - Bracketier',
      version: '1.0.1',
    },
    schemes: ['http', 'https'],
    servers: [{ url: '/' }],
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    `${__dirname}/../routes/*.*`,
    `${__dirname}/../modules/**/routes/index.*`,
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerRoutes = Router();

swaggerRoutes.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export { swaggerRoutes };