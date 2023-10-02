import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import comidaController from './controller/mercadoController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(comidaController);

servidor.listen(process.env.PORT,
                () => console.log('API subiu disgraça'))
