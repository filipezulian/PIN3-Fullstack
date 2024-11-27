import { RegisterPaths } from '@routes/paths';
import { Authenticated } from '@middleware/Authorization';
import { JogadorController } from '../controller/JogadorController';
const jogadorController = new JogadorController();

const paths = [
 /**
   * @swagger
   * /jogador:
   *   post:
   *     summary: Create a new Jogador
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Jogador
   *     description: Endpoint to create a new Jogador.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               jog_name:
   *                 type: string
   *                 description: The name of the Jogador.
   *                 example: Filipe
   *               jog_gender:
   *                 type: string
   *                 description: The Jogador's gender (masculino, feminino).
   *                 example: masculino
   *     responses:
   *       200:
   *         description: Jogador created successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: number
   *                   example: 2
   *                 name:
   *                   type: string
   *                   example: Gabriela
   *                 gender:
   *                   type: string
   *                   example: MACHO
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
    handlers: jogadorController.create,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /jogador/edit:
   *   put:
   *     summary: Edit Jogador
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Jogador
   *     description: Endpoint to edit a Jogador.
   *     parameters:
   *       - in: query
   *         name: jog_id
   *         description: Id do jogador
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
   *       - in: query
   *         name: jog_name
   *         description: nome do jogador
   *         schema:
   *           type: string
   *           example: 'Filipe'
   *         required: false
   *       - in: query
   *         name: jog_gender
   *         description: genero do jogador (masculino ou feminino)
   *         schema:
   *           type: string
   *           example: 'masculino ou feminino'
   *         required: false
   *     responses:
   *       200:
   *         description: Jogador created successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: number
   *                   example: 2
   *                 name:
   *                   type: string
   *                   example: Gabriela
   *                 gender:
   *                   type: string
   *                   example: MACHO
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
    url: '/edit',
    handlers: jogadorController.edit,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /jogador:
   *   get:
   *     summary: Get all Jogadores
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Jogador
   *     description: Endpoint to get all Jogadores.
   *     responses:
   *       200:
   *         description: All Jogadores for this user
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
    handlers: jogadorController.listJogadorByOwner,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /jogador:
   *   delete:
   *     summary: delete jogador
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Jogador
   *     description: Endpoint to delete jogador.
   *     parameters:
   *       - in: query
   *         name: jog_id
   *         description: Id do jogador
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
   *     responses:
   *       200:
   *         description: delete jogador
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'DELETE',
    moduleByName: 'Jogador',
    url: '/',
    handlers: jogadorController.delete,
    middlewares: [Authenticated]
  },
];

const jogadorRoutes = RegisterPaths({ paths });

export { jogadorRoutes };
