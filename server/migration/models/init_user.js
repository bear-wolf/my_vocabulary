'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class init_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  init_user.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'init_user',
  });
  return init_user;
};