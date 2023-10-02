import { inserir, alterar, consultar, deletar } from '../repository/mercadoRepository.js'
import { Router } from "express"

let endpoints = Router();

endpoints.post('/comida', async (req, resp) => {
    try {
        let comida = req.body;

        let r = await inserir(comida);
        resp.send(r)
    }

    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
 })



 endpoints.get('/comida', async (req, resp) => {
    let dados = await consultar();
    resp.send(dados);
})

export default endpoints;