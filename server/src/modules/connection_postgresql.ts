import { Sequelize } from 'sequelize';
import 'dotenv/config'

const {
    PGSQL_DB_HOST, PGSQL_DB_PORT, PGSQL_DB_NAME, PGSQL_DB_USERNAME, PGSQL_DB_PASSWORD
} = process.env;

const sequelize = new Sequelize(
    `postgres://${PGSQL_DB_USERNAME}:${PGSQL_DB_PASSWORD}@${PGSQL_DB_HOST}:${PGSQL_DB_PORT}/${PGSQL_DB_NAME}`, {
        host: PGSQL_DB_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: false
    }
);

export default sequelize