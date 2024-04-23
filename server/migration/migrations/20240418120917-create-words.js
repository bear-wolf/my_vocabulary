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
      topic_uuid: {
        type: DataTypes.STRING(36),
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
        type: DataTypes.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Words');
  }
};