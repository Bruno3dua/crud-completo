const productsModel = require('../models/productsModel')

const getAll = async (_req, res) => {
    const produtos = await productsModel.getAll()

    return res.status(200).json(produtos)
}

const getOne = async (req, res) => {
    const {id} = req.params
    const [produto] = await productsModel.getOne(id)
    return res.status(200).json(produto)
}

const createProduct = async (req, res) => {
    const createdProduct = await productsModel.createProduct(req.body)
    return res.status(201).json(createdProduct)
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    await productsModel.deleteProduct(id)
    return res.status(204).json()
}

const updateProduct = async (req, res) => {
    const {id} = req.params
    await productsModel.updateProduct(id, req.body)
    return res.status(204).json()
} 

module.exports = {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct,
    getOne
}