import joi from "joi";
import {User} from "../../../db/user.model";
import {goggleAccessTokenIsExpire} from "../routes/auth/auth.controller";
import restHelper from "../handlers/rest.helper";
import {Faq} from "../../../db/faq.model";
import {FeedBack} from "../../../db/feedback.model";

export const requireToken = async (req: any, res: any, next: any) => {
    const {authorization: access_token} = req.headers;

    if (access_token) {
        const userdata: any = await User.findOne({access_token}).exec();

        if (userdata) {
            // TODO: When you detect token like Google, you need check it
            //const googleTokenIsExpire = await goggleAccessTokenIsExpire(access_token) || false;

            if (userdata.accessTokenIsExpire())
                return res.status(401).json({message: 'Authorization token header is expired.'});

            req.userdata = userdata;
            return next();
        }
        return res.status(401).json({message: 'Authorization token it\'s not correct.'});
    }

    return res.status(401).json({message: 'Authorization token header is required.'});
};

export const isID = (req: any, res: any, next: any) => {
    const validationSchema = joi.object({
        _id: joi.string().hex().length(24)
    })
    const validator = validationSchema.validate({
        _id: req.params._id
    }, {abortEarly: true});

    if (validator.error) return res.status(400).json({message: validator.error.message});

    next()
}

// UNIVERSAL REST
export const rest = (req: any, res: any, next: any) => {
    const entity: string = req.url.split('/')[1] || '';

    const object: any = {
        faq: (req: any, res: any, next: any) => restHelper.rest(req, res, next, Faq),
        feedback: (req: any, res: any, next: any) => restHelper.rest(req, res, next, FeedBack)
    }

    object[entity](req, res, next);

    next();
}


export default {
    isID,
    rest,
    requireToken
}