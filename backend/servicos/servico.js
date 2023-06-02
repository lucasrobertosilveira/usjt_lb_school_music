const fs = require ("fs")

function getTodosServicos() {
  return JSON.parse(fs.readFileSync("servicos.json"))
}

function getServicoPorId(id) {
  const servicos = JSON.parse(fs.readFileSync("servicos.json"))

  const servicoFiltrado = servicos.filter(servico => servico.id === id) [0]
  return servicoFiltrado
}

function insereServico(servicoNovo) {
  const servicos = JSON.parse(fs.readFileSync("servicos.json"))

  const novaListaDeServicos = [...servicos, servicoNovo]

  fs.writeFileSync("servicos.json", JSON.stringify(novaListaDeServicos))
}

function modificaServico(modificacoes, id) {
  let servicosAtuais = JSON.parse(fs.readFileSync("servicos.json"))
  const indiceModificado = servicosAtuais.findIndex(servico => servico.id === id)

  const conteudoMudado = { ...servicosAtuais[indiceModificado], ...modificacoes}

  servicosAtuais[indiceModificado] = conteudoMudado

  fs.writeFileSync("servicos.json", JSON.stringify(servicosAtuais))
}

function deletaServicoPorId(id) {
  const servicos = JSON.parse(fs.readFileSync("servicos.json"))

  const servicosFiltrados = servicos.filter(servico => servico.id !== id)
  fs.writeFileSync("servicos.json", JSON.stringify(servicosFiltrados))
}

module.exports = {
  getTodosServicos,
  getServicoPorId,
  insereServico,
  modificaServico,
  deletaServicoPorId
}

