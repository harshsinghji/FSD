const express = require('express')
require('dotenv').config()
const app = express()

console.log(process.env.port)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.port, ()=>{
    console.log("hello");
})