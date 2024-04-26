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
                language: 'en',
                email: 'example@example.com',
                password: await bcrypt.hash('14714711', salt),
                created_at: new Date()
            },
            {
                uuid: v4(),
                first_name: 'Coval',
                last_name: 'Sergio',
                user_name: 'cov_sergio',
                language: 'ua',
                email: 'test@example.com',
                password: await bcrypt.hash('12312311', salt),
                created_at: new Date()
            },
            {
                uuid: v4(),
                first_name: 'Test',
                last_name: 'Test2',
                user_name: 'test2',
                language: 'ua',
                email: 'test2@example.com',
                password: await bcrypt.hash('15915911', salt),
                created_at: new Date()
            },
            {
                uuid: v4(),
                first_name: 'Петро',
                last_name: 'Коваль',
                user_name: 'petro',
                language: 'ua',
                email: 'petro@example.com',
                password: await bcrypt.hash('15915911', salt),
                created_at: new Date()
            },
            {
                uuid: v4(),
                first_name: 'Marta',
                last_name: 'Vovkivna',
                user_name: 'MartaV',
                language: 'UA',
                email: 'marta@example.com',
                password: await bcrypt.hash('15915911', salt),
                created_at: new Date()
            }]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};