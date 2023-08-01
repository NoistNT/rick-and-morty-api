const { DataTypes } = require('sequelize')

// Export Model definition
// Then inject the sequelize connection
module.exports = (sequelize) => {
  sequelize.define(
    'Location',
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
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dimension: {
        type: DataTypes.STRING,
        allowNull: false
      },
      residents: {
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
