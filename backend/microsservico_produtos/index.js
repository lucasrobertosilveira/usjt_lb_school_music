const express = require ('express')
const app = express();
const microsservico_produtos = {}

app.get ('/microsservico_produtos', (req, res) => {
  res.send(microsservico_produtos)
})

app.patch ('/', (req, res) => {

})

app.delete('/', (req, res) => {
  
})

const port = 7000
app.listen(port, () => {
  console.log('Microsserviço de produtos. Porta 7000')
})