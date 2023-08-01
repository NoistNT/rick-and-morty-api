const { Router } = require('express')
const {
  getEpisodes,
  getEpisodeById
} = require('../controllers/episodes/episodesController')

const episodesRouter = Router()

// Routes config
episodesRouter.get('/', getEpisodes)
episodesRouter.get('/:id', getEpisodeById)

module.exports = episodesRouter
