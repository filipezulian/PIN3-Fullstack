import { swaggerRoutes } from "@config/swagger";
import { errorMiddleware } from "@middleware/AppError";
import { authRoutes } from "@modules/Auth/routes";
import { chaveamentoRoutes } from "@modules/Chaveamentos/routes";
import { esporteRoutes } from "@modules/Esportes/routes";
import { estatisticaJogadorRoutes } from "@modules/rel_EstatisticaJogador/routes";
import { estatisticaTimeRoutes } from "@modules/rel_EstatisticaTime/routes";
import { jogadorRoutes } from "@modules/Jogadores/routes";
import { timeJogadorRoutes } from "@modules/rel_TimeJogador/routes";
import { timeRoutes } from "@modules/Times/routes";
import { usuarioRoutes } from "@modules/Users/routes";
import { Router } from "express";
import { campeonatoRoutes } from "@modules/Campeonatos/routes";

const router = Router();

const moduleRegister = [
  {
    name: 'Doc',
    url: '/doc',
    handlers: swaggerRoutes,
  },
  {
    name: 'Usuario',
    url: '/usuario',
    handlers: usuarioRoutes,
  },
  {
    name: 'Auth',
    url: '/',
    handlers: authRoutes,
  },
  {
    name: 'Jogador',
    url: '/jogador',
    handlers: jogadorRoutes,
  },
  {
    name: 'EstatisticaJogador',
    url: '/jogador/estatistica',
    handlers: estatisticaJogadorRoutes
  },
  {
    name: 'Chaveamento',
    url: '/chaveamento',
    handlers: chaveamentoRoutes
  },
  {
    name: 'Time',
    url: '/time',
    handlers: timeRoutes
  },
  {
    name: 'Time',
    url: '/time/estatistica',
    handlers: estatisticaTimeRoutes
  },
  {
    name: 'Esporte',
    url: '/esporte',
    handlers: esporteRoutes
  },
  {
    name: 'Time',
    url: '/timejogador',
    handlers: timeJogadorRoutes
  },
  {
    name: 'Campeonato',
    url: '/campeonatos',
    handlers: campeonatoRoutes
  },
];

moduleRegister.map((module) => {
  router.use(module.url, module.handlers);
});

router.use(errorMiddleware);

export { router, moduleRegister };
