'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserTopics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      uuid: {
        type: Sequelize.DataTypes.STRING
      },
      user_uuid: {
        type: Sequelize.DataTypes.STRING
      },
      level_uuid: {
        type: Sequelize.DataTypes.STRING
      },
      topic_uuid: {
        type: Sequelize.DataTypes.STRING
      },
      status: {
        type: Sequelize.DataTypes.INTEGER
      },
      progress: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING)
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserTopics');
  }
};