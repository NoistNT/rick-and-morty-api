const { DataTypes } = require('sequelize')

// Export Model definition
// Then inject the sequelize connection
module.exports = (sequelize) => {
  sequelize.define(
    'Character',
    {
      id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      origin: {
        type: DataTypes.JSONB,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      episode: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  )
}
