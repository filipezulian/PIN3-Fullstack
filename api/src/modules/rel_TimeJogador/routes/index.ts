import { RegisterPaths } from "@routes/paths";
import { TimeJogadorController } from "../controller/TimeJogadorController";
import { Authenticated } from "@middleware/Authorization";

const timeJogadorController = new TimeJogadorController();

const paths = [
  /**
    * @swagger
    * /timejogador:
    *   post:
    *     summary: Alocar jogador no time
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - TimeJogador
    *     description: Alocar jogador no time.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               tim_id:
    *                 type: integer
    *                 description: time
    *                 example: 1
    *               jog_id:
    *                 type: integer
    *                 description: jogador
    *                 example: 2
    *     responses:
    *       200:
    *         description: Jogador alocado
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
  {
    method: 'POST',
    moduleByName: 'TimeJogador',
    url: '/',
    handlers: timeJogadorController.create,
    middlewares: [Authenticated]
  },
   /**
    * @swagger
    * /timejogador/multiple:
    *   post:
    *     summary: Alocar jogadores no time
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - TimeJogador
    *     description: Alocar jogadores no time.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               tim_id:
    *                 type: integer
    *                 description: time
    *                 example: 1
    *               jogadores:
    *                 type: array
    *                 items:
    *                   type: integer
    *                 description: Array of jogadores.
    *                 example: [1,2,3,4,5,6,7,8]
    *     responses:
    *       200:
    *         description: Jogador alocado
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
   {
    method: 'POST',
    moduleByName: 'TimeJogador',
    url: '/multiple',
    handlers: timeJogadorController.createMultiple,
    middlewares: [Authenticated]
  },
   /**
    * @swagger
    * /timejogador/time:
    *   get:
    *     summary: Alocar jogadores no time
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - TimeJogador
    *     description: Alocar jogadores no time.
   *     parameters:
   *       - in: query
   *         name: tim_id
   *         description: time's id
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
    *     responses:
    *       200:
    *         description: Jogador alocado
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
   {
    method: 'GET',
    moduleByName: 'TimeJogador',
    url: '/time',
    handlers: timeJogadorController.listByTime,
    middlewares: [Authenticated]
  },
];

const timeJogadorRoutes = RegisterPaths({paths});

export { timeJogadorRoutes }