const express = require('express');
const app = express();
const port = 3000
const bodyparser = require('body-parser');

app.use(express.static('public'))

app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`listening at ${port}`)
})