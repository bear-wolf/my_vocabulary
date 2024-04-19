// src/models/user.model.ts
import {DataTypes, Model, Sequelize} from 'sequelize';

export default class LevelModel extends Model {
    public id?: number;
    public uuid?: string;
    public title?: string;
    public created_at?: string;
    public updated_at?: string;
}

export const levelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING(100)
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
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

export const LevelSchema = (sequelize: Sequelize) => {
    LevelModel.init(levelAttributes, {
        sequelize,
        tableName: 'Levels',
        timestamps: false
    });
    LevelModel.sync();

    return LevelModel;
}