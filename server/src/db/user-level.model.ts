import {DataTypes, Model, Sequelize} from 'sequelize';

class UserLevelModel extends Model {
    public id?: number;
    public uuid?: string;
    public user_uuid?: string;
    public level_uuid?: string;
    public status?: string;
    public progress?: number;
    public created_at?: string;
    public updated_at?: string;
}

export default UserLevelModel

export const userLevelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING(36),
        allowNull: false
    },
    user_uuid: {
        type: DataTypes.STRING(36),
        allowNull: false
    },
    level_uuid: {
        type: DataTypes.STRING(36),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        default: 0 // 0 -> closed; 1 -> open 2 -> progress
    },
    progress: {
        type: DataTypes.INTEGER,
        default: 0
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}

export const UserLevelSchema = (sequelize: Sequelize) => {
    UserLevelModel.init(userLevelAttributes, {
        sequelize,
        tableName: 'UserLevels',
        timestamps: false
    });
    UserLevelModel.sync();
    return UserLevelModel;
}
