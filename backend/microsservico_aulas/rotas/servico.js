const {Router} = require ("express")
const {getServicos, getServico, postServico, patchServico, deleteServico} = require("../controladores/servico")

const router = Router()

router.get('/', getServicos)

router.get('/:id', getServico)

router.post('/', postServico)

router.patch('/:id', patchServico)

router.delete('/:id', deleteServico)

module.exports = router