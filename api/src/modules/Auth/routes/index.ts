import { Authenticated } from "@middleware/Authorization";
import { UsuarioController } from "@modules/Users/controller/UsuarioController";
import { RegisterPaths } from "@routes/paths";
import { AuthController } from "../controller/AuthController";
const usuarioController = new UsuarioController();
const authController = new AuthController();
const paths = [
    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Login
     *     tags:
     *       - Login
     *     description:
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               usr_email:
     *                 type: string
     *                 description: User Email.
     *                 example: "admin"
     *               usr_password:
     *                 type: string
     *                 description: User password.
     *                 example: "admin"
     *     responses:
     *      201:
     *        description: Sucessful login
     *      401:
     *        description: Token missing
     *      404:
     *        description: Login not found
     *      500:
     *        description: Internal server error
     */
    {
        method: 'POST',
        moduleByName: 'login',
        url: '/login',
        handlers: usuarioController.login,
        middlewares: []
    },
    /**
     * @swagger
     * /logout:
     *   post:
     *     summary: Logout
     *     tags:
     *       - Login
     *     description:
     *     responses:
     *      201:
     *        description: Sucessful logout
     *      401:
     *        description: Token missing
     *      404:
     *        description: logout not found
     *      500:
     *        description: Internal server error
     */
    {
        method: 'POST',
        moduleByName: 'logout',
        url: '/logout',
        handlers: usuarioController.logout,
        middlewares: [Authenticated]
    },
    /**
     * @swagger
     * /email:
     *   post:
     *     summary: email
     *     tags:
     *       - Login
     *     description:
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *                 description: User Email.
     *                 example: "filipe.zulian@gmail.com"
     *     responses:
     *      201:
     *        description: Email Sent
     *      401:
     *        description: Token missing
     *      404:
     *        description: Email not sent
     *      500:
     *        description: Internal server error
     */
    {
        method: 'POST',
        moduleByName: 'email',
        url: '/email',
        handlers: authController.sendPasswordResetEmail,
        middlewares: []
    },
];

const authRoutes = RegisterPaths({ paths })

export { authRoutes };
