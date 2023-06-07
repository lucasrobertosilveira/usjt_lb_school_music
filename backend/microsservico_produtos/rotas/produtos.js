const {Router} = require ('express')

const router = Router()

router.get('/', getProdutos)

router.get('/', getProduto)

router.patch('/', patchProdutos)

router.delete('/', deleteProdutos)

module.exports = router