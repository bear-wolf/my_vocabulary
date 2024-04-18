// src/models/user.ts
import { Model, Sequelize, DataTypes } from 'sequelize';
import exp from "node:constants";

export default class User extends Model {
    public id?: number;
    public uuid?: string;
    public first_name?: string;
    public last_name?: string;
    public user_name?: string;
    public language?: string;
    public email?: string;
    public password?: string;
    public created_at?: string;
    public updated_at?: string;
}

export const userAttributes= {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING(100)
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    language: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        default: Date.now()
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}

export const UserSchema = (sequelize: Sequelize) => {
    User.init(userAttributes, {
        sequelize,
        tableName: 'users',
        timestamps: false
    });
    User.sync();
}