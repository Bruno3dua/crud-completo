const express = require('express')
const productController = require('../controllers/productControllers')
const productMiddlewares = require('../middlewares/productMiddleware')

const router = express.Router()

router.get('/produtos', productController.getAll)
router.get('/produtos/:id', productController.getOne)
router.post('/New', productMiddlewares.validateBody, productController.createProduct)
router.delete('/produtos/:id', productController.deleteProduct)
router.put('/produtos/:id', productMiddlewares.validateBody, productController.updateProduct)

module.exports = router