const { getTodosServicos, getServicoPorId, insereServico, modificaServico, deletaServicoPorId} = require("../servicos/servico")

function getServicos (req, res) {
  try {
    const servicos = getTodosServicos()
    res.send(servicos)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function getServico (req, res) {
  try {
    const id = req.params.id
    const servico = getServicoPorId(id)
    res.send(servico)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function patchServico (req, res) {
  try {
    const id = req.params.id
    const body = req.body
    
    modificaServico(body,id)
    res.send("item modificado com sucesso")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteServico (req, res) {
  try {
    const id = req.params.id
    deletaServicoPorId(id)
    res.send("serviço deletado com sucesso")
  } catch(error) {
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getServicos,
  getServico, 
  patchServico,
  deleteServico
}