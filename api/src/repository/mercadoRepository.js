import conexao from './connection.js'

export async function inserir(comida) {
    let comando = 'insert into tb_comida(nm_comida, tp_comida, vl_preco, qtd_estoque, dt_validade) values(?, ?, ?, ?, ?)'

    let [resp] = await conexao.query(comando,
        [
            comida.nome,
            comida.tipo,
            comida.preco,
            comida.estoque,
            comida.validade
        ])

    comida.id = resp.insertId;
    return comida
}

export async function alterar(id, comida) {
    let comando = `update tb_comida 
    set nm_comida = ?,
    tp_comida = ?, 
    vl_preco = ?, 
    qtd_estoque = ?,
    dt_validade = ?
    where id_comida = ?`

    let [resp] = await conexao.query(comando,
        [
            comida.nome,
            comida.tipo,
            comida.preco,
            comida.estoque,
            comida.validade,
            id
        ])

        return resp.affectedRows;
}


export async function deletar(id) {
    let comando = `
        delete from tb_comida
                where id_comida = ?
    `

    let [resp] = await conexao.query(comando, [id])
    return resp.affectedRows;
}


export async function consultar(nome) {
    let comando = `
        select id_comida    as id,
               nm_comida    as nome,
               tp_comida    as tipo,
               vl_preco     as preco,
               qtd_estoque  as estoque,
               dt_validade  as validade
               
        from tb_comida
       where nm_comida like ?
    `

    let [dados] = await conexao.query(comando, ['%' + nome + '%'])
    return dados;
}