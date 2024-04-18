'use strict';
const {v4} = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Levels', [{
            uuid: v4(),
            title: 'Charlie Preschool 1',
            created_at: Date.now()
        },
            {
                uuid: v4(),
                title: 'Charlie Preschool 2',
                created_at: Date.now()
            }, {
                uuid: v4(),
                title: 'Charlie Starter 1',
                created_at: Date.now()
            }, {
                uuid: v4(),
                title: 'Charlie Starter 2',
                created_at: Date.now()
            }, {
                uuid: v4(),
                title: 'Charlie Mover 1',
                created_at: Date.now()
            }, {
                uuid: v4(),
                title: 'Charlie Mover 2',
                created_at: Date.now()
            }, {
                uuid: v4(),
                title: 'Charlie Flyer 1',
                created_at: Date.now()
            }, {
                uuid: v4(),
                title: 'Charlie Flyer 2',
                created_at: Date.now()
            }]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Levels', {
            title: 'Charlie Preschool 1'
        }, {});
        await queryInterface.bulkDelete('Levels', {
            title: 'Charlie Preschool 2'
        }, {});
    }
};