'use strict';
const {v4} = require('uuid');

const levels = [{
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
        title: 'Lesson 1 - Hello 1'
    },
    {
        title: 'Lesson 2 - Hello 2'
    }, {
        title: 'Lesson 3 - My School 1'
    }, {
        title: 'Lesson 4 - My School 2'
    }, {
        title: 'Lesson 5 - My Toys 1'
    }, {
        title: 'Lesson 6 - My Toys 2'
    }, {
        title: 'Lesson 7 - My Toys 3'
    }, {
        title: 'Lesson 8 - My Family 1'
    }, {
        title: 'Lesson 9 - My Family 2'
    }, {
        title: 'Lesson 10 - Revision 1'
    }, {
        title: 'Lesson 11 - My Animals 1'
    }, {
        title: 'Lesson 12 - My Animals 2'
    }, {
        title: 'Lesson 13 - My Toys 2'
    }, {
        title: 'Lesson 14 - My Toys 3'
    }, {
        title: 'Lesson 15 - My Family 3'
    }, {
        title: 'Lesson 16 - Revision 2'
    }]

const topicList = [
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[0].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[1].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[2].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[3].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[4].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[5].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[6].uuid
        }
    })),
    ...(topics.map((topic) => {
        return {
            ...topic,
            uuid: v4(),
            level_uuid: levels[7].uuid
        }
    }))
]

topicList.map(item => {
    item.created_at = Date.now().toString()
})

let words = [{
        topic_uuid: topicList[0].uuid,
        picture: 'svgs/words/bear.svg',
        original: 'Bear',
        translate: JSON.stringify({
            ua: 'Ведмідь',
            en: 'Bear'
        }),
        voice: JSON.stringify({})
    },
    {
        picture: 'svgs/words/cat.svg',
        original: 'Cat',
        translate: JSON.stringify({
            ua: 'Кіт',
            en: 'Cat'
        }),
        voice: JSON.stringify({})
    },
    {
        picture: 'svgs/words/cow.svg',
        original: 'Cow',
        translate: JSON.stringify({
            ua: 'Корова',
            en: 'Cow'
        }),
        voice: JSON.stringify({})
    },
    {
        picture: 'svgs/words/deer.svg',
        original: 'Deer',
        translate: JSON.stringify({
            ua: 'Олень',
            en: 'Deer'
        }),
        voice: JSON.stringify({})
    },
    {
        picture: 'svgs/words/fox.svg',
        original: 'Fox',
        translate: JSON.stringify({
            ua: 'Лисиця',
            en: 'Fox'
        }),
        voice: JSON.stringify({})
    },
    {
        picture: 'svgs/words/monkey.svg',
        original: 'Monkey',
        translate: JSON.stringify({
            ua: 'Мавпа',
            en: 'Monkey'
        }),
        voice: JSON.stringify({})
    },
    {
        picture: 'svgs/words/squirrel.svg',
        original: 'Squirrel',
        translate: JSON.stringify({
            ua: 'Білка',
            en: 'Squirrel'
        }),
        voice: JSON.stringify({})
    }
]
const wordList = [
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[0].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[1].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[2].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[3].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[4].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[5].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[6].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            uuid: v4(),
            topic_uuid: topicList[7].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[8].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[9].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[10].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[11].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[12].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[13].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[14].uuid,
            created_at: Date.now().toString()
        }
    })),
    ...(words.map(item => {
        return {
            ...item,
            uuid: v4(),
            topic_uuid: topicList[15].uuid,
            created_at: Date.now().toString()
        }
    }))
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Levels', levels);
        await queryInterface.bulkInsert('Topics', topicList);
        await queryInterface.bulkInsert('Words', wordList);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Levels', levels, {});
        await queryInterface.bulkDelete('Topics', topicList, {});
        await queryInterface.bulkDelete('Words', wordList, {});
    }
};