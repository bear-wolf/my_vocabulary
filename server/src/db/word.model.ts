import { Model, Sequelize, DataTypes } from 'sequelize';
import exp from "node:constants";

export default class WordModel extends Model {
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
    topic_uuid: {
        type: DataTypes.STRING(36),
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
        type: DataTypes.STRING(50)
    }
}

export const WordSchema = (sequelize: Sequelize) => {
    WordModel.init(wordAttributes, {
        sequelize,
        tableName: 'Words',
        timestamps: false
    });
    WordModel.sync();

    return WordModel
}