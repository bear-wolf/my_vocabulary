// src/models/user.ts
import { Model, Sequelize, DataTypes } from 'sequelize';
import exp from "node:constants";

export default class Topic extends Model {
    public id?: number;
    public uuid?: string;
    public title?: string;
    public created_at?: string;
    public updated_at?: string;
}

export const topicAttributes= {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING(100)
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: DataTypes.STRING(50),
        default: Date.now()
    },
    updated_at: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}

export const UserSchema = (sequelize: Sequelize) => {
    Topic.init(topicAttributes, {
        sequelize,
        tableName: 'topics',
        timestamps: false
    });
    Topic.sync();
}