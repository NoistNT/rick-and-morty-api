const {
  getCharactersData,
  getCharactersByNameData,
  getCharactersByStatusData,
  getCharactersBySpeciesData,
  getCharactersByTypeData,
  getCharactersByGenderData,
  getCharacterByIdData
} = require('./handlers/charactersHandler')

const getCharacters = async (req, res) => {
  const { name, status, species, type, gender } = req.query
  try {
    if (name) {
      return res.status(200).json(await getCharactersByNameData(name))
    }
    if (status) {
      return res.status(200).json(await getCharactersByStatusData(status))
    }
    if (species) {
      return res.status(200).json(await getCharactersBySpeciesData(species))
    }
    if (type) {
      return res.status(200).json(await getCharactersByTypeData(type))
    }
    if (gender) {
      return res.status(200).json(await getCharactersByGenderData(gender))
    }

    res.status(200).json(await getCharactersData())
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getCharacterById = async (req, res) => {
  const { id } = req.params
  try {
    res.status(200).json(await getCharacterByIdData(id))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getCharacters, getCharacterById }
