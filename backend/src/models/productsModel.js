const connection = require('./conections')

const getAll = async () => {
    const [produtos] = await connection.execute('SELECT * FROM produtos')
    return produtos
}

const getOne = async (id) => {
    const produto = await connection.execute('SELECT * FROM produtos WHERE id = ?', [id])
    return produto
}

const createProduct = async (data) => {
    const { nome, descricao, preco, quantidade } = data

    const query = 'INSERT INTO produtos (nome, descricao, preco, quantidade) VALUES (?, ?, ?, ?)'

    const [createdProduct] = await connection.execute(query, [nome, descricao, preco, quantidade])
    return {insertId : createdProduct.insertId}
}

const deleteProduct = async (id) => {
    const query = 'DELETE FROM produtos WHERE id = ?'
    const removedProduct = await connection.execute(query, [id])
}

const updateProduct = async (id, newData) => {
    const { nome, descricao, preco, quantidade } = newData
    const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade = ? WHERE id = ?'
    const updatedProduct = await connection.execute(query, [nome, descricao, preco, quantidade, id])
}

module.exports = {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct,
    getOne
}