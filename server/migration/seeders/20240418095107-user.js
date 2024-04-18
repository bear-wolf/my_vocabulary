// import { v4 } from 'uuid';
// import bcrypt from 'bcrypt';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // console.log('YEP')
        // const userPassword = '14714711';
        // const saltRounds = 10;
        // const salt = await bcrypt.genSalt(saltRounds);
        // const hash = await bcrypt.hash(userPassword, salt);
        // console.log('hash', hash);

        return queryInterface.bulkInsert('Users', [
            {
                uuid: 'v4()',
                first_name: 'Andrew',
                last_name: 'Bar',
                user_name: 'bear-wolf',
                language: 'EN',
                email: 'example@example.com',
                password: 'hash',
                created_at: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};