const {getTodosProdutos, getProdutosPorId, modificaProduto, deletaProdutoPorId} = require ("../servicos/produtos")

function getProdutos (req, res) {
  try {
    const produtos = getTodosProdutos()
    res.send(produtos)
  } catch (error) {
    res.staus(500)
    res.send(error.message)
  }
}

function getProduto (req, res) {
  try {
    const id = req.params.id
    const produto = getProdutosPorId(id)
    res.send(produto)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function patchProdutos (req, res) {
  try {
    const id = req.params.id
    const body = req.body

    modificaProduto(body, id)
    res.send("produto alterado com sucesso")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteProdutos (req, res) {
  try {
    const id = req.params.id
    deletaProdutoPorId(id)
    res.send("produto excluído do carrinho")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getProdutos,
  getProduto,
  patchProdutos, 
  deleteProdutos 
}