const express = require('express') 
const axios = require ('axios')
const app = express()
app.use(express.json())

app.post('/eventos', (req, res) => {
  const evento = req.body
  
})