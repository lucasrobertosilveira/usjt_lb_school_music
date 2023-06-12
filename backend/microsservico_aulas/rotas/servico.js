const {Router} = require ("express")
const {getServicos, getServico, patchServico, deleteServico} = require("../controladores/servico")

const router = Router()

router.get('/', getServicos)

router.get('/:id', getServico)

router.patch('/:id', patchServico)

router.delete('/:id', deleteServico)

module.exports = router