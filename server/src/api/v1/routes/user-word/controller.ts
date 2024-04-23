import {User, UserLevel, UserTopic, UserWord} from "../../../../db/index";

export const getList = async (req: any, res: any, next: any) => {
    const list = await User.findAll()

    res
        .status(200)
        .json(list)
}

export const getByID = async (req: any, res: any, next: any) => {
    const list = await User.findByPk(req.params.id);

    res
        .status(200)
        .json(list)
}

export const create = (req: any, res: any, next: any) => {
    res
        .status(200)
        .send("Site is working!")
}

export const removeByID = async (req: any, res: any, next: any) => {
    await User.destroy({where: {id: req.params.id}});

    res.status(200).json({})
}

export const getUserLevelByID = async (req: any, res: any, next: any) => {
    const list = await UserLevel.findByPk(req.params.id);

    if (!list) return res.status(404).json({message: 'No user-level found'});

    res
        .status(200)
        .json(list || {})
}

export const getUserLevelList = async (req: any, res: any, next: any) => {
    const list = await UserLevel.findAll();

    res
        .status(200)
        .json(list)
}

export const getUserWord = async (req: any, res: any, next: any) => {
    const list = await UserWord.findByPk(req.params.id);

    res
        .status(200)
        .json(list)
}

export const createUserWord = async (req: any, res: any, next: any) => {
    const userTopic = new UserTopic({})

    try {
        await userTopic.save()
    }
    catch (err) {
        return res.status(400).json({err: err})
    }

    res
        .status(200)
        .json({})
}