const express = require ('express')
const app = express();
const microsservico_produtos = {}

app.get ('/microsservico_produtos', (req, res) => {

})

app.put ('/microsservico_produtos', (req, res) => {

})

const port = 7000
app.listen(port, () => {
  console.log('Microsserviço de produtos. Porta 7000')
})