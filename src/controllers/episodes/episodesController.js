const {
  getEpisodesData,
  getEpisodesByNameData,
  getEpisodeByEpisodeData,
  getEpisodeByIdData
} = require('./handlers/episodesHandler')

const getEpisodes = async (req, res) => {
  const { name, episode } = req.query
  try {
    if (name) {
      return res.status(200).json(await getEpisodesByNameData(name))
    }
    if (episode) {
      return res.status(200).json(await getEpisodeByEpisodeData(episode))
    }

    res.status(200).json(await getEpisodesData())
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getEpisodeById = async (req, res) => {
  const { id } = req.params
  try {
    res.status(200).json(await getEpisodeByIdData(id))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getEpisodes, getEpisodeById }
