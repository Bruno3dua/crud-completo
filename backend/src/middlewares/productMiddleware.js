const validateBody = (req, res, next) => {
    const {body} = req
    if (body.nome == undefined || body.nome == '') {
        return res.status(400).json( {message: 'The field nome is required'} ) 
    }

    if (body.descricao == undefined || body.descricao == '') {
        return res.status(400).json( {message: 'The field descrição is required'} ) 
    }

    if (body.preco == undefined || body.preco == '') {
        return res.status(400).json( {message: 'The field preço is required'} ) 
    }

    if (body.quantidade == undefined || body.quantidade == '') {
        return res.status(400).json( {message: 'The field quantidade is required'} ) 
    }
 
    next()
}

module.exports = {
    validateBody
}