require('dotenv').config()
const axios = require('axios')
const { URL, CHARACTERS_TOTAL } = process.env
const { Character } = require('../../../db')

// Get data from external API
const getAPIDataForCharacters = async () => {
  const characters = []

  for (let id = 1; id <= CHARACTERS_TOTAL; id++) {
    try {
      const { data } = await axios.get(`${URL}/character/${id}`)
      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        type: data.type || 'Unknown',
        gender: data.gender,
        origin: data.origin,
        image: data.image,
        episode: data.episode ? data.episode : 'None',
        url: data.url,
        created: data.created
      }
      characters.push(character)
      console.log(`${character.name} loaded`)
    } catch (error) {
      throw new Error(
        `Error retrieving character with id ${id}. ${error.message}`
      )
    }
  }

  return characters
}

// Load the retrieved data into the Character table
const loadCharacters = async () => {
  try {
    const characters = await Character.findAll()
    if (!characters.length) {
      const charactersData = await getAPIDataForCharacters()
      await Character.bulkCreate(charactersData)
      console.log('✔ - Characters data loaded into database successfully!')
    }
    console.log('✔ - Character data is up to date')
  } catch (error) {
    throw new Error(`Error loading characters data into database. ${error}`)
  }
}

// Synchronize data to database
const syncCharactersToDB = async () => {
  await loadCharacters()
}

module.exports = syncCharactersToDB
