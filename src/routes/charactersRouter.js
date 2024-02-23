const { Router } = require('express')
const {
  getCharacters,
  getCharacterById
} = require('../controllers/characters/charactersController')

const charactersRouter = Router()

// Routes config
charactersRouter.get('/', getCharacters)
charactersRouter.get('/:id', getCharacterById)

module.exports = charactersRouter
