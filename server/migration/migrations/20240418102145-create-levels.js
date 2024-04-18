'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Levels', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: DataTypes.STRING(100)
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.STRING(50),
        default: Date.now()
      },
      updated_at: {
        type: DataTypes.STRING(50),
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Levels');
  }
};