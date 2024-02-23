require('dotenv').config()
const axios = require('axios')
const { URL } = process.env

// Get episodes data from API
const getEpisodesData = async () => {
  try {
    const { data } = await axios.get(`${URL}/episode`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch episodes data. ${error.message}`)
  }
}

// name: filter by the given name.
const getEpisodesByNameData = async (name) => {
  try {
    const { data } = await axios.get(`${URL}/episode/?name=${name}`)
    return data
  } catch (error) {
    throw new Error(`Episode '${name}' not found . ${error.message}`)
  }
}

// episode: filter by the given episode code.
const getEpisodeByEpisodeData = async (episode) => {
  try {
    const { data } = await axios.get(`${URL}/episode/?episode=${episode}`)
    return data
  } catch (error) {
    throw new Error(`Episode '${episode}' not found. ${error.message}`)
  }
}

// id: filter by the given id (1)
const getEpisodeByIdData = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/episode/${id}`)
    return data
  } catch (error) {
    throw new Error(`Episode ${id} not found. ${error.message}`)
  }
}

module.exports = {
  getEpisodesData,
  getEpisodesByNameData,
  getEpisodeByEpisodeData,
  getEpisodeByIdData
}
