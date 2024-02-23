const {
  getLocationsData,
  getLocationsByNameData,
  getLocationsByDimensionData,
  getLocationsByTypeData,
  getLocationByIdData
} = require('./handlers/locationsHandler')

const getLocations = async (req, res) => {
  const { name, dimension, type } = req.query
  try {
    if (name) {
      return res.status(200).json(await getLocationsByNameData(name))
    }
    if (dimension) {
      return res.status(200).json(await getLocationsByDimensionData(dimension))
    }
    if (type) {
      return res.status(200).json(await getLocationsByTypeData(type))
    }

    res.status(200).json(await getLocationsData())
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getLocationById = async (req, res) => {
  const { id } = req.params
  try {
    res.status(200).json(await getLocationByIdData(id))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getLocations, getLocationById }
