const { Router } = require('express')

// Importing Routers
const charactersRouter = require('./charactersRouter')
const locationsRouter = require('./locationsRouter')
const episodesRouter = require('./episodesRouter')

const mainRouter = Router()

// Setting Routers
mainRouter
  .use('/character', charactersRouter)
  .use('/location', locationsRouter)
  .use('/episode', episodesRouter)

module.exports = mainRouter
