// src/models/user.ts
import { Model, Sequelize, DataTypes } from 'sequelize';
import exp from "node:constants";

export default class Level extends Model {
    public id?: number;
    public uuid?: string;
    public title?: string;
    public created_at?: string;
    public updated_at?: string;
}

export const levelAttributes= {
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

export const UserSchema = (sequelize: Sequelize) => {
    Level.init(levelAttributes, {
        sequelize,
        tableName: 'levels',
        timestamps: false
    });
    Level.sync();
}