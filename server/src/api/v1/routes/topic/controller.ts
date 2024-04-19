import {Level, Topic} from '../../../../db/index';

export const getList = async (req: any, res: any, next: any) => {
    const list = await Topic.findAll()

    res
        .status(200)
        .json(list)
}

export const getByID = async (req: any, res: any, next: any) => {
    const list = await Topic.findByPk(req.params.id);

    res
        .status(200)
        .json(list)
}

export const removeByID = async (req: any, res: any, next: any) => {
    await Topic.destroy({ where: { id: req.params.id } });

    res.status(200).json({})
}