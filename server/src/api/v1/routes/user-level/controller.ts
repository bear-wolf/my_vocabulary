import {UserLevel, UserTopic} from "../../../../db/index";
import {v4} from 'uuid';
import joi from "joi";

export const removeByID = async (req: any, res: any, next: any) => {
    await UserLevel.destroy({where: {id: req.params.id}});

    res.status(200).json({})
}

export const getUserLevelByID = async (req: any, res: any, next: any) => {
    console.log("UserLevel ID",req.query.uuid);
    const list = await UserLevel.findAll({where: {
        uuid: req.query.uuid
    }});

    if (!list) return res.status(404).json({message: 'No user-level found'});

    res
        .status(200)
        .json(list || [])
}

export const getUserLevelList = async (req: any, res: any, next: any) => {
    const validationSchema = joi.object({
        uuid: joi.string().required().error(() => new Error('user_uuid is required')),
    })
    const validator = validationSchema.validate(req.query, {abortEarly: true});

    if (validator.error) return res.status(400).json({message: validator.error.message});

    const {uuid} = req.query
    const list = await UserLevel.findAll({where: {user_uuid: uuid}});

    res
        .status(200)
        .json(list)
}

export const updateUserLevel = async (req: any, res: any, next: any) => {
    let userLevel: any = await UserLevel.findByPk(req.params.id)

    if (!userLevel) return res.status(400).json({err: 'No user level found'});

    try {
        userLevel = await UserLevel.update({
            progress: req.body.progress,
            updated_at: Date.now()
        }, {
            where: {
                id: req.params.id
            }
        })
        userLevel = await UserLevel.findOne({where: {id: req.params.id}})
    } catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json(userLevel)
}

export const createUserLevel = async (req: any, res: any, next: any) => {
    let userLevel;

    userLevel = await UserLevel.findOne({
        where: {
            user_uuid: req.body.user_uuid,
            level_uuid: req.body.level_uuid,
        }});

    if (userLevel) return res.status(400).json({err: 'User level already exists'});

    try {
        userLevel = await UserLevel.create({
            uuid: v4(),
            user_uuid: req.body.user_uuid,
            level_uuid: req.body.level_uuid,
            status: 1, // 0 -> closed; 1 -> open 2 -> progress,
            progress: 0,
            created_at: Date.now()
        })
    } catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json([userLevel.toJSON()])
}