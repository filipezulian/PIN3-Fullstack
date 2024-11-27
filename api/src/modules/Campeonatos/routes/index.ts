import { Authenticated } from "@middleware/Authorization";
import { CampeonatoController } from "../controller/CampeonatoController";
import { RegisterPaths } from "@routes/paths";

const campeonatoController = new CampeonatoController();

const paths = [
  /**
    * @swagger
    * /campeonatos:
    *   post:
    *     summary: Create Campeonato
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - Campeonato
    *     description: Endpoint to Create Campeonato.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               camp_nome:
    *                 type: string
    *                 description: Name
    *                 example: 'teste 1'
    *               chav_id:
    *                 type: integer
    *                 description: Chaveamento selected
    *                 example: 1
    *               esp_id:
    *                 type: integer
    *                 description: esporte selected
    *                 example: 3
    *               camp_obs:
    *                 type: string
    *                 description: Campeonato obs
    *                 example: Esse eh um exemplo
    *               times:
    *                 type: array
    *                 items:
    *                   type: number
    *                 description: Array of times.
    *                 example: [15, 16]
    *     responses:
    *       200:
    *         description: created campeonato successfully
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
  {
    method: 'POST',
    moduleByName: 'Campeonato',
    url: '/',
    handlers: campeonatoController.create,
    middlewares: [Authenticated]
  },
  /**
    * @swagger
    * /campeonatos:
    *   put:
    *     summary: edit Campeonato
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - Campeonato
    *     description: Endpoint to edit Campeonato.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               camp_id:
    *                 type: integer
    *                 description: Id
    *                 example: 1
    *               camp_nome:
    *                 type: string
    *                 description: Name
    *                 example: 'teste 1'
    *               camp_obs:
    *                 type: string
    *                 description: Campeonato obs
    *                 example: Esse eh um exemplo
    *     responses:
    *       200:
    *         description: edited campeonato successfully
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
  {
    method: 'PUT',
    moduleByName: 'Campeonato',
    url: '/',
    handlers: campeonatoController.edit,
    middlewares: [Authenticated]
  },
  /**
    * @swagger
    * /campeonatos:
    *   get:
    *     summary: Get Campeonato
    *     tags:
    *       - Campeonato
    *     description: Endpoint to Get Campeonato.
    *     parameters:
    *       - in: query
    *         name: camp_id
    *         description: Id do campeonato
    *         schema:
    *           type: integer
    *           example: 1
    *         required: true
    *     responses:
    *       200:
    *         description: Received Campeonato successfully
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
  {
    method: 'GET',
    moduleByName: 'Campeonato',
    url: '/',
    handlers: campeonatoController.view,
    middlewares: []
  },
  /**
    * @swagger
    * /campeonatos:
    *   delete:
    *     summary: delete Campeonato
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - Campeonato
    *     description: Endpoint to delete Campeonato.
    *     parameters:
    *       - in: query
    *         name: camp_id
    *         description: Id do campeonato
    *         schema:
    *           type: integer
    *           example: 1
    *         required: true
    *     responses:
    *       200:
    *         description: Time deleted successfully
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
  {
    method: 'DELETE',
    moduleByName: 'Campeonato',
    url: '/',
    handlers: campeonatoController.delete,
    middlewares: [Authenticated]
  },
];

const campeonatoRoutes = RegisterPaths({ paths });

export { campeonatoRoutes }
