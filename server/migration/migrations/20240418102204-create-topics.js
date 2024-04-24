'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Topics', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      level_uuid: {
        type: Sequelize.DataTypes.STRING(36)
      },
      uuid: {
        type: Sequelize.DataTypes.STRING(36)
      },
      title: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DataTypes.STRING(50),
        default: Date.now()
      },
      updated_at: {
        type: Sequelize.DataTypes.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Topics');
  }
};