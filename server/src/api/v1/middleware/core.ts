import joi from "joi";
import restHelper from "../handlers/rest.helper";
import {User, Level, Word, Topic} from "../../../db/index";

export const isID = (req: any, res: any, next: any) => {
    const validationSchema = joi.object({
        id: joi.string().required().error(() => new Error('ID is required')),
    })
    const validator = validationSchema.validate({
        id: req.params.id
    }, {abortEarly: true});

    if (validator.error) return res.status(400).json({message: validator.error.message});

    next()
}

export const isUUID = (req: any, res: any, next: any) => {
    const validationSchema = joi.object({
        uuid: joi.string().required().error(() => new Error('UUID is required')),
    })
    const validator = validationSchema.validate({
        uuid: req.query.uuid,
    }, {abortEarly: true});

    if (validator.error) return res.status(400).json({message: validator.error.message});

    next()
}


// UNIVERSAL REST
export const rest = async (req: any, res: any, next: any) => {
    if (!req.entity) return res.status(404).send("No entity found as middleware.");

    const object: any = {
        user: async (req: any, res: any, next: any) => await restHelper.rest(req, res, next, User),
        level: async (req: any, res: any, next: any) => await restHelper.rest(req, res, next, Level),
        topic: async (req: any, res: any, next: any) => await restHelper.rest(req, res, next, Topic),
        word: async (req: any, res: any, next: any) => await restHelper.rest(req, res, next, Word)
    }

    await object[req.entity](req, res, next);
    next();
}


export default {
    isID,
    rest
}