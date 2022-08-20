'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movies.belongsToMany(models.personaje,{through:models.personaje_pelicula})
      movies.belongsTo(models.generos,{
        foreignKey:'id',
        target_Key:'idgenero'

      })
    }
  }
  movies.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fecha: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    idgenero:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};