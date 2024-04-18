import mongoose from 'mongoose';
import { User } from './../src/db/user.model';
import 'dotenv/config'
import {iUserSchema} from "../src/db/schemas/user.schema";

describe("MongoDB tests", () => {
    let DB_HOST = process.env.DB_HOST;
    let DB_NAME = process.env.DB_NAME;
    let DB_USERNAME = process.env.DB_USERNAME;
    let DB_PASSWORD = process.env.DB_PASSWORD;
    let DB_AUTH_SOURCE = process.env.DB_AUTH_SOURCE;

    it("Write the method in Mongo schemas", async () => {
        const schema = new mongoose.Schema({
            token: {
                type: String,
                default: null
            },
            created_on: {
                type: Date,
                default: Date.now(),
                index: true
            }
        });

        schema.method('meow', () => console.log('That\'s work'))

        const Simple = mongoose.model('Test', schema);

        const fizz: any = new Simple;
        fizz.meow();

        expect(true).toBe(true);
    })

    it("Test JWT token", async () => {
        const user: any  = new User;
        user.email = 'test@test.com';
        user.access_token = user.generateAccessToken()
        user.refresh_token = user.generateRefreshToken()

        console.log('access_token:', user.access_token);
        console.log('refresh_token', user.refresh_token);
        console.log('expire access_token:', user.accessTokenIsExpire());
        console.log('expire refresh_token', user.refreshTokenIsExpire());

        expect(true).toBe(true);
    })
});