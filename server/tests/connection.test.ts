import mongoose from 'mongoose';
import 'dotenv/config'

describe("MongoDB connection_postgresql test", () => {
    let DB_HOST = process.env.DB_HOST;
    let DB_NAME = process.env.DB_NAME;
    let DB_USERNAME = process.env.DB_USERNAME;
    let DB_PASSWORD = process.env.DB_PASSWORD;
    let DB_AUTH_SOURCE = process.env.DB_AUTH_SOURCE;

    it("Check if environment variables are exists", async () => {
        expect(DB_HOST && DB_NAME && DB_AUTH_SOURCE !== undefined).toBe(true);
    })

    it("Connection to dbMongo", async () => {
        const usernameAndPassword = DB_USERNAME && DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : '';
        const connectionString = `mongodb://${usernameAndPassword}${DB_HOST}/${DB_NAME}`
        const options = {
            useNewUrlParser: true,
            authSource: DB_AUTH_SOURCE,
            useUnifiedTopology: true
        }

        const connection = await mongoose.createConnection(connectionString, options);
        const schema = new mongoose.Schema({}, {
            strict: true,
            collection: 'test',
            versionKey: false
        });
        const test = connection.model('test', schema);
        const list = await test.find({});

        console.log("Select from db collection('test'):", list.length);

        return expect(list.length).toBe(list.length);
    });
});