import mongoose from 'mongoose';
const {
    DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_AUTH_SOURCE
} = process.env;
const usernameAndPassword = DB_USERNAME && DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : '';

const options = {
    useNewUrlParser: true,
    authSource: DB_AUTH_SOURCE,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

async function connect() {
    return await mongoose.connect(`mongodb://${usernameAndPassword}${DB_HOST}:${DB_PORT}/${DB_NAME}`);
}
async function createConnection() {
    return await mongoose.createConnection(`mongodb://${usernameAndPassword}${DB_HOST}:${DB_PORT}/${DB_NAME}`, options);
}


export const dbConnect = (req: any, res: any, next: any) => {
    console.log('middleware: dbConnect')
    createConnection()
        .then(() => next())
        .catch(() => new Error('Connected failed!'))
}

