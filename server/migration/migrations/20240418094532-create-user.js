module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            uuid: {
                type: Sequelize.DataTypes.STRING(100)
            },
            first_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            last_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            user_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            language: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DataTypes.STRING(50),
                allowNull: true
            },
            updated_at: {
                type: Sequelize.DataTypes.STRING(50),
                allowNull: true
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};