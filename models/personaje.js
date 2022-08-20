'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       personaje.belongsToMany(models.movies,{through:models.personaje_pelicula})
    }
  }
  personaje.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personaje',
  });
  return personaje;
};