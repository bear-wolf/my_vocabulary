'use strict';
const {v4} = require('uuid');

const levels = [{
    uuid: v4(),
    title: 'Charlie Preschool 1',
    created_at: Date.now()
},
    {
        title: 'Charlie Preschool 2',
        created_at: Date.now()
    }, {
        title: 'Charlie Starter 1',
        created_at: Date.now()
    }, {
        title: 'Charlie Starter 2',
        created_at: Date.now()
    }, {
        title: 'Charlie Mover 1',
        created_at: Date.now()
    }, {
        title: 'Charlie Mover 2',
        created_at: Date.now()
    }, {
        title: 'Charlie Flyer 1',
        created_at: Date.now()
    }, {
        title: 'Charlie Flyer 2',
        created_at: Date.now()
    }]

levels.map(item => {
    item.uuid = v4()
})

let topics = [{
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

topics = [
    ...(topics.map((topic) => {
        topic.level_uuid = levels[0].uuid
        return topic
    })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[1].uuid
    //     return topic
    // })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[2].uuid
    //     return topic
    // })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[3].uuid
    //     return topic
    // })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[4].uuid
    //     return topic
    // })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[5].uuid
    //     return topic
    // })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[6].uuid
    //     return topic
    // })),
    // ...(topics.map((topic) => {
    //     topic.level_uuid = levels[7].uuid
    //     return topic
    // }))
]

topics.map(item => {
    item.created_at = Date.now().toString()
})

let words = [{
    topic_uuid: levels[0].uuid,
    picture: 'svgs/words/bear.svg',
    original: 'Bear',
    translate: JSON.stringify({
        ua: 'Ведмідь',
        en: 'Bear'
    }),
    voice: JSON.stringify({})
},
    {
        topic_uuid: topics[0].uuid,
        picture: 'svgs/words/cat.svg',
        original: 'Cat',
        translate: JSON.stringify({
            ua: 'Кіт',
            en: 'Cat'
        }),
        voice: JSON.stringify({})
    },
    {
        topic_uuid: topics[0].uuid,
        picture: 'svgs/words/cow.svg',
        original: 'Cow',
        translate: JSON.stringify({
            ua: 'Корова',
            en: 'Cow'
        }),
        voice: JSON.stringify({})
    },
    {
        topic_uuid: topics[0].uuid,
        picture: 'svgs/words/deer.svg',
        original: 'Deer',
        translate: JSON.stringify({
            ua: 'Олень',
            en: 'Deer'
        }),
        voice: JSON.stringify({})
    },
    {
        topic_uuid: topics[0].uuid,
        picture: 'svgs/words/fox.svg',
        original: 'Fox',
        translate: JSON.stringify({
            ua: 'Лисиця',
            en: 'Fox'
        }),
        voice: JSON.stringify({})
    },
    {
        topic_uuid: topics[0].uuid,
        picture: 'svgs/words/monkey.svg',
        original: 'Monkey',
        translate: JSON.stringify({
            ua: 'Мавпа',
            en: 'Monkey'
        }),
        voice: JSON.stringify({})
    },
    {
        topic_uuid: topics[0].uuid,
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


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Levels', levels);
        await queryInterface.bulkInsert('Topics', topics);
        await queryInterface.bulkInsert('Words', words);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Levels', levels, {});
        await queryInterface.bulkDelete('Topics', topics, {});
        await queryInterface.bulkDelete('Words', words, {});
    }
};