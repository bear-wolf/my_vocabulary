export {}
import {User} from '../../../../db/user.model';
import {logger} from '../../../../boot/winston';

export let getList = async (req: any, res: any, next: any) => {
    const list = await User.find({});
    res.json(list);
}

export let getByID = async (req: any, res: any, next: any) => {
    const { id:_id } = req.params

    if (!_id)
        return res.status(400).json({ message: 'The params are not corrected' });

    const user = await User.findOne({_id});

    if (user) return res.json(user);

    res.status(400).json({ message: 'User ID is not correct' });
}

export let patch = (req: any, res: any, next: any) => {
    // const body = req.body;
    // const dateUpdate = moment().format(process.env.FORMAT_SERVER_DATE);
    // if (!body) {
    //     ResponseBad(res, {
    //         message: "The body of request is not found"
    //     });
    //     return;
    // }
    // body['dateUpdate'] = dateUpdate;
    // const {error} = validateUpdateUser(body);
    // if (error) {
    //     ResponseBad(res, {
    //         message: error.details[0].message
    //     });
    //     return;
    // }
    // const {id} = body;
    // let updateQuery = parseRequestOnData(body);
    // User.updateOne({id: id}, updateQuery)
    //     .then((document) =>
    //         ResponseOK(res, {message: 'User was updated successfully'}))
    //     .catch(error => ResponseBad(res, error))
}

export let remove = (req: any, res: any, next: any) => {
    throw new Error('Remove method not realization')
}
