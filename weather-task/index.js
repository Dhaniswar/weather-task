const express = require('express')
const app = express()
const port = 3000
import real_weather from './app/roudes/realtime.js'


app.use(bodyParser.json());
app.use('/real_weather', real_weather);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



