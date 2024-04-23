'use strict';
const {DataTypes} = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserLevels', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: DataTypes.STRING
      },
      user_uuid: {
        type: DataTypes.STRING
      },
      level_uuid: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER
      },
      progress: {
        type: DataTypes.INTEGER
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_levels');
  }
};