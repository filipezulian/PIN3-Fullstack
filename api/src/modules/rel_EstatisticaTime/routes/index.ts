import { RegisterPaths } from "@routes/paths";
import { EstatisticaTimeController } from "../controller/EstatisticaTimeController";
import { Authenticated } from "@middleware/Authorization";

const estatisticaTimeController = new EstatisticaTimeController();

const paths = [
 /**
   * @swagger
   * /time/estatistica:
   *   get:
   *     summary: Get Time's Estatistica
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Time/estatistica
   *     description: Endpoint to Get Time's Estatistica.
   *     parameters:
   *       - in: query
   *         name: timeId
   *         description: Id do time
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
   *     responses:
   *       200:
   *         description: Time created successfully
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
 {
    method: 'GET',
    moduleByName: 'Time',
    url: '/',
    handlers: estatisticaTimeController.listEstatisticaByTime,
    middlewares: [Authenticated]
  },
  /**
    * @swagger
    * /time/estatistica:
    *   put:
    *     summary: Edit jogador's estatistca
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - Time/estatistica
    *     description: Endpoint to edit jogador's estatistca.
    *     parameters:
    *       - in: query
    *         name: timeId
    *         description: Id do Time
    *         schema:
    *           type: integer
    *           example: 1
    *         required: true
    *       - in: query
    *         name: camp_vencidos
    *         description: Quantidade de campeonatos vencidos
    *         schema:
    *           type: integer
    *           example: 1
    *         required: false
    *       - in: query
    *         name: qntpartidas
    *         description: Quantidade de partidas
    *         schema:
    *           type: integer
    *           example: 1
    *         required: false
    *       - in: query
    *         name: partidas_vencidas
    *         description: Quantidade de partidas vencidas
    *         schema:
    *           type: integer
    *           example: 1
    *         required: false
    *       - in: query
    *         name: qntcamp
    *         description: Quantidade de campeonatos
    *         schema:
    *           type: integer
    *           example: 1
    *         required: false
    *     responses:
    *       200:
    *         description: edit de estatistica
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
   {
     method: 'PUT',
     moduleByName: 'Time',
     url: '/',
     handlers: estatisticaTimeController.edit,
     middlewares: [Authenticated]
   },
];

const estatisticaTimeRoutes = RegisterPaths({ paths });

export { estatisticaTimeRoutes };