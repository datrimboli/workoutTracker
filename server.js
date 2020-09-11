// Bringing in express, path
const express = require('express')
const { join } = require('path')
// Creating app to = express
const app = express()
// Linking to public folder 
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))
// Listening for port 3000 
require('./db')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
