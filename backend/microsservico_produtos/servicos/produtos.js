const fs = require ('fs')

function  getTodosProdutos() {
  return JSON.parse(fs.readFileSync("produtos.json"))
}

function getProdutosPorId(id) {
  const produtos = JSON.parse(fs.readFileSync("produtos.json"))

  const produtoFiltrado = produtos.filter(produto => produto.id === id) [0]
  return produtoFiltrado
}

function modificaProduto(modificacoes, id) {
  let produtosAtuais = JSON.parse(fs.readFileSync("produtos.json"))
  const indiceModificado = produtosAtuais.findIndex(produto => produto.id === id)

  const produtoAlterado = { ...produtosAtuais[indiceModificado], ...modificacoes}

  produtosAtuais[indiceModificado] = produtoAlterado

  fs.writeFileSync("produtos.json", JSON.stringify(produtosAtuais))
}

function deletaProdutoPorId(id) {
  const produtos = JSON.parse(fs.readFileSync("produtos.json"))

  const produtosFiltrados = produtos.filter(produto => produto.id !== id)
  fs.writeFileSync("produtos.json", JSON.stringify(produtosFiltrados))
}

module.exports = {
  getTodosProdutos,
  getProdutosPorId,
  modificaProduto,
  deletaProdutoPorId
}