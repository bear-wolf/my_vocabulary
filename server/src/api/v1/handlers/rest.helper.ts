import {NextFunction, Request, Response} from "express";

export const getList = async (req: any, res: any, next: any, db: any) => {
    res.json(await db.find({}));
}

export const getByID = async (req: any, res: any, next: any, db: any, _id: Types.ObjectId) => {
    const entity = await db.findOne({_id});

    if (entity) return res.json(entity);

    res.status(400).json({message: 'ID is not correct'});
}

export const remove = async (req: any, res: any, next: any, db: any, _id: Types.ObjectId) => {
    await db.deleteOne({_id});
    res.json({});
}

export const rest = async (req: Request, res: Response, next: NextFunction, db: any) => {
    const subAction: string = req.url.split('/')[2] || '';
    const ID: any = subAction.length == 24 && subAction || null;

    if (subAction === 'list' && req.method === 'GET') return getList(req, res, next, db);
    if (ID && req.method === 'POST') return getByID(req, res, next, db, ID);
    if (ID && req.method === 'DELETE') return remove(req, res, next, db, ID);
}

export default {
    rest
}