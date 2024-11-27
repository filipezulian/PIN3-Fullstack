import { Authenticated } from "@middleware/Authorization";
import { RegisterPaths } from "@routes/paths";
import { EsporteController } from "../controller/EsporteController";
const esporteController = new EsporteController();

const paths = [
/**
   * @swagger
   * /esporte:
   *   get:
   *     summary: Get all Esportes
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Esporte
   *     description: Endpoint to get all Esportes.
   *     responses:
   *       200:
   *         description: All Esportes
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
{
    method: 'GET',
    moduleByName: 'Esporte',
    url: '/',
    handlers: esporteController.listEsportes,
    middlewares: [Authenticated]
  },
];

  const esporteRoutes = RegisterPaths({ paths });
  
  export { esporteRoutes };