'use strict';
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userPassword = '14714711';
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(userPassword, salt);
    console.log('hash', hash);

    await queryInterface.bulkInsert('Users', [{
      uuid: v4(),
      first_name: 'Andrew',
      last_name: 'Bar',
      user_name: 'bear-wolf',
      language: 'EN',
      email: 'example@example.com',
      password: 'hash',
      created_at: new Date()
    }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('init_users');
  }
};