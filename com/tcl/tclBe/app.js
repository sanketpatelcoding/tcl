const express = require('express')
const app = express()
const router=require('./routes/route')


app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello from maplesoftinfo');
})

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})