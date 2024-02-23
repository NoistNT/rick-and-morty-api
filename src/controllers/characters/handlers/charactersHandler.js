require('dotenv').config()
const axios = require('axios')
const { URL } = process.env

// Get characters data from API
const getCharactersData = async () => {
  try {
    const { data } = await axios.get(`${URL}/character`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch characters data. ${error.message}`)
  }
}

// name: filter by the given name.
const getCharactersByNameData = async (name) => {
  try {
    const { data } = await axios.get(`${URL}/character/?name=${name}`)
    return data
  } catch (error) {
    throw new Error(`Character '${name}' not found. ${error.message}`)
  }
}

// status: filter by the given status (alive, dead or unknown).
const getCharactersByStatusData = async (status) => {
  try {
    const { data } = await axios.get(`${URL}/character/?status=${status}`)
    return data
  } catch (error) {
    throw new Error(`Status ${status} not found. ${error.message}`)
  }
}

// species: filter by the given species.
const getCharactersBySpeciesData = async (species) => {
  try {
    const { data } = await axios.get(`${URL}/character/?species=${species}`)
    return data
  } catch (error) {
    throw new Error(`Specie '${species}' not found. ${error.message}`)
  }
}

// type: filter by the given type.
const getCharactersByTypeData = async (type) => {
  try {
    const { data } = await axios.get(`${URL}/character/?type=${type}`)
    return data
  } catch (error) {
    throw new Error(`Type '${type}' not found. ${error.message}`)
  }
}

// gender: filter by the given gender (female, male, genderless or unknown).
const getCharactersByGenderData = async (gender) => {
  try {
    const { data } = await axios.get(`${URL}/character/?gender=${gender}`)
    return data
  } catch (error) {
    throw new Error(`Gender '${gender}' not found. ${error.message}`)
  }
}

// id: filter by the given id (1).
const getCharacterByIdData = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/character/${id}`)
    return data
  } catch (error) {
    throw new Error(`Character with id ${id} not found. ${error.message}`)
  }
}

module.exports = {
  getCharactersData,
  getCharactersByNameData,
  getCharactersByStatusData,
  getCharactersBySpeciesData,
  getCharactersByTypeData,
  getCharactersByGenderData,
  getCharacterByIdData
}
