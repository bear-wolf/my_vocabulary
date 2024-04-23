import {DataTypes, Model, Sequelize} from 'sequelize';

class UserTopicModel extends Model {
    public id?: number;
    public uuid?: string;
    public user_uuid?: string;
    public level_uuid?: string;
    public status?: string;
    public progress?: number;
    public created_at?: string;
    public updated_at?: string;
}

export default UserTopicModel

export const userTopicAttributes = {
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
    topic_uuid: {
        type: DataTypes.STRING(36),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        default: 0 // 0 -> closed; 1 -> completed
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

export const UserTopicSchema = (sequelize: Sequelize) => {
    UserTopicModel.init(userTopicAttributes, {
        sequelize,
        tableName: 'UserLevel',
        timestamps: false
    });
    UserTopicModel.sync();
    return UserTopicModel;
}
