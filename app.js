if (process.env.NODE_ENV === `development`) {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_ATLAS, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log(`connected to db`))
  .catch(err => console.log(`failed to connect to db`))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/', router)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listening on port`, PORT)
})