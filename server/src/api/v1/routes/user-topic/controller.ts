import {UserLevel, UserTopic} from "../../../../db/index";
import {v4} from "uuid";

export const removeByID = async (req: any, res: any, next: any) => {
    await UserLevel.destroy({where: {id: req.params.id}});

    res.status(200).json({})
}

export const getUserTopicList = async (req: any, res: any, next: any) => {
    const list = await UserTopic.findAll({where: {user_uuid: req.query.uuid}});

    if (!(list || []).length) return res.status(404).json({message: `No user topic found.`});

    res
        .status(200)
        .json(list)
}


export const getUserTopicByID = async (req: any, res: any, next: any) => {
    const list = await UserTopic.findAll({
        where: {
            id: req.params.id,
            user_uuid: req.query.user_uuid
        }
    });

    if (!(list || []).length) return res.status(404).json({message: 'No user-level found'});

    res
        .status(200)
        .json(list)
}

export const createUserTopic = async (req: any, res: any, next: any) => {
    if (!req.body.user_uuid) return res.status(400).json({err: 'No user uuid'});

    let userTopic;
    try {
        userTopic = await UserTopic.create({
            uuid: v4(),
            user_uuid: req.body.user_uuid,
            level_uuid: req.body.level_uuid,
            topic_uuid: req.body.topic_uuid,
            status: 0,
            progress: [],
            created_at: Date.now()
        });
    } catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json(userTopic)
}

export const updateUserTopic = async (req: any, res: any, next: any) => {
    let userTopic

    try {
        await UserTopic.update({
            progress: req.body.progress,
            updated_at: Date.now(),
            status: 1
        }, {
            where: {id: req.params.id}
        });
        userTopic = await UserTopic.findOne({where: {id: req.params.id}})
    } catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json(userTopic)
}