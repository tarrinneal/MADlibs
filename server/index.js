const express = require('express');
const app = express();
const port = process.env.PORT || 3000
require('dotenv').config();
const bodyparser = require('body-parser');
const db = require('../database')

app.use(express.static('public'))

app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/stories', (req, res) => {
  db.getAllStories()
    .then((data) => {
      res.send(data)
    })
    .catch(error => {
      res.send(error)
    })
})

app.post('/', (req, res) => {
  db.addLib(req.body)
    .then((data) => {
      res.send(data)
    })
})

app.post('/save', (req, res) => {
  let body = req.body;
  body.date = new Date()
  db.addStory(body)
    .then(data => {
      res.send(data)
    })
})


app.listen(port, () => {
  console.log(`listening at ${port}`)
})