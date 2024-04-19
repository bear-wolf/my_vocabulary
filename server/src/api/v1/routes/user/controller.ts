import {Topic, User} from "../../../../db/index";

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
    await User.destroy({ where: { id: req.params.id } });

    res.status(200).json({})
}