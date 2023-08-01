const syncCharactersToDB = require('./handlers/getCharacterData')
const syncLocationToDB = require('./handlers/getLocationData')

const getAPIData = async () => {
  try {
    await syncCharactersToDB()
    await syncLocationToDB()
    console.log('✔ - Data synced to database')
  } catch (error) {
    console.error(`Data sync error ${error}`)
  }
}

module.exports = getAPIData
