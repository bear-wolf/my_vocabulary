// src/models/user.model.ts
import { Model, Sequelize, DataTypes } from 'sequelize';
import exp from "node:constants";
import UserModel from "./user.model";

export default class TopicModel extends Model {
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
    level_uuid: {
        type: DataTypes.STRING(36)
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

export const TopicSchema = (sequelize: Sequelize) => {
    TopicModel.init(topicAttributes, {
        sequelize,
        tableName: 'Topics',
        timestamps: false
    });
    TopicModel.sync();
    return TopicModel;
}