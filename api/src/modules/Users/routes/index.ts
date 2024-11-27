import { RegisterPaths } from '@routes/paths';
import { UsuarioController } from '../controller/UsuarioController';
import { Authenticated } from '@middleware/Authorization';
const usuarioController = new UsuarioController();

const paths = [
 /**
   * @swagger
   * /usuario:
   *   post:
   *     summary: Create a new user
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Usuario
   *     description: Endpoint to create a new user.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               usr_name:
   *                 type: string
   *                 description: The name of the user.
   *                 example: Filipe
   *               usr_email:
   *                 type: string
   *                 description: The email address of the user.
   *                 example: filipe.zulian@gmail.com
   *               usr_password:
   *                 type: string
   *                 description: The password for the user.
   *                 example: s4fe!Password123
   *     responses:
   *       200:
   *         description: User created successfully
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
   *                 email:
   *                   type: string
   *                   example: gabiiwestphal@gmail.com
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'POST',
    moduleByName: 'Usuario',
    url: '/',
    handlers: usuarioController.create,
    middlewares: []
  },
 /**
   * @swagger
   * /usuario:
   *   put:
   *     summary: Edit a user
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Usuario
   *     description: Endpoint to edit a user
   *     parameters:
   *       - in: query
   *         name: usr_name
   *         description: Nome do usuario
   *         schema:
   *           type: string
   *           example: "Juju"
   *         required: false
   *       - in: query
   *         name: usr_email
   *         description: email do usuario
   *         schema:
   *           type: string
   *           example: "juliana@gmail.com"
   *         required: false
   *     responses:
   *       200:
   *         description: User created successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 name:
   *                   type: string
   *                   example: Gabriela
   *                 email:
   *                   type: string
   *                   example: gabiiwestphal@gmail.com
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'PUT',
    moduleByName: 'Usuario',
    url: '/',
    handlers: usuarioController.edit,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /usuario:
   *   delete:
   *     summary: Delete the user
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Usuario
   *     description: Endpoint to delete user
   *     parameters:
   *       - in: query
   *         name: usr_password
   *         description: Senha do usuario
   *         schema:
   *           type: string
   *           example: "SenhaBoa!123"
   *         required: true
   *     responses:
   *       200:
   *         description: User created successfully
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'DELETE',
    moduleByName: 'Usuario',
    url: '/',
    handlers: usuarioController.delete,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /usuario/getByEmail:
   *   post:
   *     summary: Get user by email
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Usuario
   *     description: Get user by email
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: The email address of the user.
   *                 example: filipe.zulian@gmail.com
   *     responses:
   *       200:
   *         description: User created successfully
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'POST',
    moduleByName: 'Usuario',
    url: '/getByEmail',
    handlers: usuarioController.getUserByEmail,
    middlewares: []
  },
];

const usuarioRoutes = RegisterPaths({ paths });

export { usuarioRoutes };
