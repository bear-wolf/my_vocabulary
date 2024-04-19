import {NextFunction, Request, Response} from "express";

export const getList = async (req: Request, res: Response, next: any, db: any) => {
    return {
        code: 200,
        data: await db.findAll({
            raw: true
        })
    };
}

export const getByID = async (req: any, res: any, next: any, db: any, id: any) => {
    const entity = await db.findOne({id, raw: true});

    if (entity) return res.json(entity);

    res.status(400).json({message: 'ID is not correct'});
}

export const remove = async (req: any, res: any, next: any, db: any, id: any) => {
    await db.deleteOne({id});
    res.json({});
}

export const rest = async (req: Request, res: Response, next: NextFunction, db: any) => {
    const subAction: string = req.url.split('/')[1] || '';
    const ID: any = subAction.length == 24 && subAction || null;
    console.log('REST REQUEST', ID);
    console.log('REST REQUEST url', req.url);
    console.log('REST REQUEST', subAction);

    console.log('REST REQUEST', (subAction === 'list' && req.method === 'GET'));
    let json = {}
    // if (subAction === 'list' && req.method === 'GET') {
    //     // const { data, code } = await getList(req, res, next, db)
    //     json = await db.findAll({
    //         raw: true
    //     });
    //     // console.log('data', data)
    //     // return res.writeHead(200).json(data)
    // }
    // if (ID && req.method === 'POST') return getByID(req, res, next, db, ID);
    // if (ID && req.method === 'DELETE') return remove(req, res, next, db, ID);

    return res.writeHead(200).json(json)
}

export default {
    rest
}