const express = require('express')
const app = express()
const router=require('./routes/route')
require('./connections/conn')

app.use(express.json());
app.use(router);
const cors=require('cors');

app.get('/', (req, res) => {
  res.send('Hello from maplesoftinfo');
})

app.listen(3001, () => {
  console.log(`Example app listening on port http://localhost:${3001}`)
})