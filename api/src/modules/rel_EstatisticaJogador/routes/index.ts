import { RegisterPaths } from '@routes/paths';
import { Authenticated } from '@middleware/Authorization';
import { EstatisticaJogadorController } from '../controller/EstatisticaJogadorController';
const estatisticaJogadorController = new EstatisticaJogadorController();

const paths = [
 /**
   * @swagger
   * /jogador/estatistica:
   *   get:
   *     summary: Get estatistica by jogador
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Jogador/estatistica
   *     description: Endpoint to get estatistica by jogador.
   *     parameters:
   *       - in: query
   *         name: jogadorId
   *         description: Id do jogador
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
   *     responses:
   *       200:
   *         description: Estatistica by jogador
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
    handlers: estatisticaJogadorController.listEstatisticaByJogador,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /jogador/estatistica:
   *   put:
   *     summary: Edit jogador's estatistca
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Jogador/estatistica
   *     description: Endpoint to edit jogador's estatistca.
   *     parameters:
   *       - in: query
   *         name: jogadorId
   *         description: Id do jogador
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
   *       - in: query
   *         name: mvp_partidas
   *         description: Quantidade de MVPs de partidas
   *         schema:
   *           type: integer
   *           example: 1
   *         required: false
   *       - in: query
   *         name: mvp_camp
   *         description: Quantidade de MVPs de cameonatos
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
    moduleByName: 'Jogador',
    url: '/',
    handlers: estatisticaJogadorController.edit,
    middlewares: [Authenticated]
  },
];

const estatisticaJogadorRoutes = RegisterPaths({ paths });

export { estatisticaJogadorRoutes };
