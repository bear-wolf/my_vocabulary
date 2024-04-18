import mongoose from 'mongoose';
import 'dotenv/config'

describe("The user entity test", () => {
    let DB_HOST = process.env.DB_HOST;
    let DB_NAME = process.env.DB_NAME;
    let DB_USERNAME = process.env.DB_USERNAME;
    let DB_PASSWORD = process.env.DB_PASSWORD;
    let DB_AUTH_SOURCE = process.env.DB_AUTH_SOURCE;

    it("Create user", async () => {
        expect(DB_HOST && DB_NAME && DB_AUTH_SOURCE !== undefined).toBe(true);
    })
});