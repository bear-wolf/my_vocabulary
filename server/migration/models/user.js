'use strict';

const {
    Model
} = require('sequelize');
const {userAttributes} = require("../../src/db/user.model.ts");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }

    User.init(userAttributes, {
        sequelize,
        modelName: 'User',
    });
    return User;
};