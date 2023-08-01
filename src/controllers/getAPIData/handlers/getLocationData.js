require('dotenv').config()
const axios = require('axios')
const { URL, LOCATIONS_TOTAL } = process.env
const { Location } = require('../../../db')

// Get data from external API
const getAPIDataForLocation = async () => {
  const locations = []

  for (let id = 1; id <= LOCATIONS_TOTAL; id++) {
    try {
      const { data } = await axios.get(`${URL}/location/${id}`)
      const location = {
        id: data.id,
        name: data.name,
        type: data.type,
        dimension: data.dimension,
        residents: data.residents,
        url: data.url,
        created: data.created
      }
      locations.push(location)
      console.log(`${location.name} loaded`)
    } catch (error) {
      throw new Error(`Error retrieving location with id ${id} error`)
    }
  }

  return locations
}

// Load the retrieved data into the Location table
const loadLocation = async () => {
  try {
    const locations = await Location.findAll()
    if (!locations.length) {
      const locationData = await getAPIDataForLocation()
      await Location.bulkCreate(locationData)
      console.log('✔ - Location data loaded into database successfully!')
    }
    console.log('✔ - Location data is up to date')
  } catch (error) {
    throw new Error(
      `Error loading location data into database. ${error.message}`
    )
  }
}

// Synchronize data to database
const syncLocationToDB = async () => {
  await loadLocation()
}

module.exports = syncLocationToDB
