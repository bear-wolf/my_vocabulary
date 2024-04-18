'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Words', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: DataTypes.STRING(100)
      },
      topicUUID: {
        type: DataTypes.UUID,
        allowNull: false
      },
      picture: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      original: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      translate: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      voice: {
        type: DataTypes.JSONB,
        allowNull: true
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
    await queryInterface.dropTable('Words');
  }
};