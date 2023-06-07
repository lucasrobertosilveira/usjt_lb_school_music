const {getTodosProdutos} = require ("../servicos/produtos")

function getProdutos (req, res) {
  try {
    const produtos = getTodosProdutos()
    res.send(produtos)
  } catch (error) {
    res.staus(500)
    res.send(error.message)
  }
}

module.exports = {
  getProdutos
}