'use strict';
const {v4} = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let list = [{
                uuid: v4(),
                title: 'Lesson 1 - Hello 1'
            },
            {
                uuid: v4(),
                title: 'Lesson 2 - Hello 2'
            }, {
                uuid: v4(),
                title: 'Lesson 3 - My School 1'
            }, {
                uuid: v4(),
                title: 'Lesson 4 - My School 2'
            }, {
                uuid: v4(),
                title: 'Lesson 5 - My Toys 1'
            }, {
                uuid: v4(),
                title: 'Lesson 6 - My Toys 2'
            }, {
                uuid: v4(),
                title: 'Lesson 7 - My Toys 3'
            }, {
                uuid: v4(),
                title: 'Lesson 8 - My Family 1'
            }, {
                uuid: v4(),
                title: 'Lesson 9 - My Family 2'
            }, {
                uuid: v4(),
                title: 'Lesson 10 - Revision 1'
            }, {
                uuid: v4(),
                title: 'Lesson 11 - My Animals 1'
            }, {
                uuid: v4(),
                title: 'Lesson 12 - My Animals 2'
            }, {
                uuid: v4(),
                title: 'Lesson 13 - My Toys 2'
            }, {
                uuid: v4(),
                title: 'Lesson 14 - My Toys 3'
            }, {
                uuid: v4(),
                title: 'Lesson 15 - My Family 3'
            }, {
                uuid: v4(),
                title: 'Lesson 16 - Revision 2'
            }]

        list.map(item => {
            item.created_at = Date.now().toString()
        })

        await queryInterface.bulkInsert('Topics', list);

        let words = [ {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/bear.svg',
                original: 'Bear',
                translate: JSON.stringify({
                    ua: 'Ведмідь',
                    en: 'Bear'
                }),
                voice: JSON.stringify({})
            },
            {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/cat.svg',
                original: 'Cat',
                translate: JSON.stringify({
                    ua: 'Кіт',
                    en: 'Cat'
                }),
                voice: JSON.stringify({})
            },
            {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/cow.svg',
                original: 'Cow',
                translate: JSON.stringify({
                    ua: 'Корова',
                    en: 'Cow'
                }),
                voice: JSON.stringify({})
            },
            {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/deer.svg',
                original: 'Deer',
                translate: JSON.stringify({
                    ua: 'Олень',
                    en: 'Deer'
                }),
                voice: JSON.stringify({})
            },
            {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/fox.svg',
                original: 'Fox',
                translate: JSON.stringify({
                    ua: 'Лисиця',
                    en: 'Fox'
                }),
                voice: JSON.stringify({})
            },
            {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/monkey.svg',
                original: 'Monkey',
                translate: JSON.stringify({
                    ua: 'Мавпа',
                    en: 'Monkey'
                }),
                voice: JSON.stringify({})
            },
            {
                topic_uuid: list[0].uuid,
                picture: 'svgs/words/squirrel.svg',
                original: 'Білка',
                translate: JSON.stringify({
                    ua: 'Корова',
                    en: 'Білка'
                }),
                voice: JSON.stringify({})
            }
        ]
        words.map(item => {
            item.created_at = Date.now().toString()
            item.uuid = v4()
        })
        await queryInterface.bulkInsert('Words', words);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Topics', {
            title: 'Lesson 1 - Hello 1'
        }, {});
        await queryInterface.bulkDelete('Words', {
            original: 'Bear'
        }, {});
    }
};