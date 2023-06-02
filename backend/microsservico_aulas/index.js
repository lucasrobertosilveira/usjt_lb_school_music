const express = require("express")
const rotaServico = require("./rotas/servico")
const app = express()
app.use(express.json())

app.use('/servico', rotaServico)

app.post('/eventos', (req, res) => {
  console.log(req.body)
  res.status(200)
  res.send({msg: 'ok'})
})

const port = 8000
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})