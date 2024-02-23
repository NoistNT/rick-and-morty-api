require('dotenv').config()
const axios = require('axios')
const { URL } = process.env

// Get location data from API
const getLocationsData = async () => {
  try {
    const { data } = await axios.get(`${URL}/location`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch locations data. ${error.message}`)
  }
}

// name: filter by the given name.
const getLocationsByNameData = async (name) => {
  try {
    const { data } = await axios.get(`${URL}/location/?name=${name}`)
    return data
  } catch (error) {
    throw new Error(`Location '${name}' not found. ${error.message}`)
  }
}

// dimension: filter by the given dimension.
const getLocationsByDimensionData = async (dimension) => {
  try {
    const { data } = await axios.get(`${URL}/location/?dimension=${dimension}`)
    return data
  } catch (error) {
    throw new Error(`Dimension '${dimension}' not found. ${error.message}`)
  }
}

// type: filter by the given type.
const getLocationsByTypeData = async (type) => {
  try {
    const { data } = await axios.get(`${URL}/location/?type=${type}`)
    return data
  } catch (error) {
    throw new Error(`Type '${type}' not found. ${error.message}`)
  }
}

// id: filter by the given id (1)
const getLocationByIdData = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/location/${id}`)
    return data
  } catch (error) {
    throw new Error(`Location with id ${id} not found. ${error.message}`)
  }
}

module.exports = {
  getLocationsData,
  getLocationsByNameData,
  getLocationsByDimensionData,
  getLocationsByTypeData,
  getLocationByIdData
}
