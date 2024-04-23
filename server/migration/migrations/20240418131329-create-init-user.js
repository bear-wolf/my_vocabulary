'use strict';
const {v4} = require('uuid');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        await queryInterface.bulkInsert('Users', [{
                uuid: v4(),
                first_name: 'Andrew',
                last_name: 'Bar',
                user_name: 'bear-wolf',
                language: 'EN',
                email: 'example@example.com',
                password: await bcrypt.hash('14714711', salt),
                created_at: new Date()
            },
            {
                uuid: v4(),
                first_name: 'Coval',
                last_name: 'Sergio',
                user_name: 'cov_sergio',
                language: 'UA',
                email: 'test@example.com',
                password: await bcrypt.hash('12312311', salt),
                created_at: new Date()
            },
            {
                uuid: v4(),
                first_name: 'Test',
                last_name: 'Test2',
                user_name: 'test2',
                language: 'UA',
                email: 'test2@example.com',
                password: await bcrypt.hash('15915911', salt),
                created_at: new Date()
            }]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};