require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

import { app } from 'app';

// const port = process.env.CONTAINER_PORT;
const port = 3005

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/doc`);
});
