import { RegisterPaths } from '@routes/paths';
import { Authenticated } from '@middleware/Authorization';
import { ChaveamentoController } from '../controller/ChaveamentoController';
const chaveamentoController = new ChaveamentoController();

const paths = [
 /**
   * @swagger
   * /chaveamento:
   *   get:
   *     summary: Get all chaveamentos
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Chaveamento
   *     description: Endpoint to get all chaveamentos.
   *     responses:
   *       200:
   *         description: All chaveamentos
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'GET',
    moduleByName: 'Jogador',
    url: '/',
    handlers: chaveamentoController.listChaveamento,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /chaveamento:
   *   post:
   *     summary: Gerar chaveamentos
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Chaveamento
   *     description: Endpoint to gerar chaveamentos.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               chav_id:
    *                 type: integer
    *                 description: Chaveamento selected
    *                 example: 1
    *               qntTimes:
    *                 type: integer
    *                 description: Amount of teams
    *                 example: 8
    *               name:
    *                 type: string
    *                 description: Campeonato name
    *                 example: Friendsball
    *               times:
    *                 type: array
    *                 items:
    *                   type: string
    *                 description: Array of jogadores.
    *                 example: ['time 1','time 2','time 3','time 4','time 5','time 6','time 7','time 8']
   *     responses:
   *       200:
   *         description: gerado chaveamento
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'POST',
    moduleByName: 'Jogador',
    url: '/',
    handlers: chaveamentoController.gerarChaveamento,
    middlewares: [Authenticated]
  }
];

const chaveamentoRoutes = RegisterPaths({ paths });

export { chaveamentoRoutes };
