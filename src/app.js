const express = require('express')
require('../src/db/connection')
const userRouter = require('./routes/user')
const app = express()

app.use(express.json())
app.use(userRouter)


module.exports = app