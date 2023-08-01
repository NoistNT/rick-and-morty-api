const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./routes/mainRouter.js')

require('./db.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use('/', router)

module.exports = app
