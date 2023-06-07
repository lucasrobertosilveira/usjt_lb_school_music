const fs = require ('fs')

function  getTodosProdutos() {
  return JSON.parse(fs.readFileSync("produtos.json"))
}

module.exports = {
  getTodosProdutos
}