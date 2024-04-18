// src/models/user.ts
import { Model, Sequelize, DataTypes } from 'sequelize';
import exp from "node:constants";

export default class Word extends Model {
    public id?: number;
    public uuid?: string;
    public title?: string;
    public created_at?: string;
    public updated_at?: string;
}

export const wordAttributes= {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING(100)
    },
    topicUUID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    picture: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    original: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    translate: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    voice: {
        type: DataTypes.JSONB,
        allowNull: true
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
    Word.init(wordAttributes, {
        sequelize,
        tableName: 'words',
        timestamps: false
    });
    Word.sync();
}