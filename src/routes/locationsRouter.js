const { Router } = require('express')
const {
  getLocations,
  getLocationById
} = require('../controllers/locations/locationsController')

const locationsRouter = Router()

// Routes config
locationsRouter.get('/', getLocations)
locationsRouter.get('/:id', getLocationById)

module.exports = locationsRouter
