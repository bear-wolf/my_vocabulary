import {UserLevel, UserTopic} from "../../../../db/index";

export const removeByID = async (req: any, res: any, next: any) => {
    await UserLevel.destroy({where: {id: req.params.id}});

    res.status(200).json({})
}

export const getUserTopicList = async (req: any, res: any, next: any) => {
    const list = await UserTopic.findAll({ where: {user_uuid: req.params.user_uuid}});

    res
        .status(200)
        .json(list)
}


export const getUserTopicByID = async (req: any, res: any, next: any) => {
    const list = await UserTopic.findAll({where: {
            id: req.params.id,
            user_uuid: req.params.user_uuid
        }});

    if (!list) return res.status(404).json({message: 'No user-level found'});

    res
        .status(200)
        .json(list || {})
}

export const createUserTopic = async (req: any, res: any, next: any) => {
    const userTopic = new UserTopic({})

    try {
        await userTopic.save()
    } catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json({})
}

export const updateUserTopic = async (req: any, res: any, next: any) => {
    const userTopic = new UserTopic({})

    try {
        await userTopic.save()
    } catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json({})
}