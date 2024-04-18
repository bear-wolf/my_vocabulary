import crypto from "crypto";
import 'dotenv/config'

it("String convert to Base64", async () => {
    console.log('To base64', Buffer.from("Hello World").toString('base64'));
    console.log('From base64', Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))

    expect(true).toBe(true)
});

// it("String convert to Base64", async () => {
//     let encryption_key = 'SECRET';
//     let cipher = crypto.createCipheriv('des-ede3-cbc', encryption_key, iv);
//     let ciph = cipher.update(plaintext, 'utf8', 'base64');
//     ciph += cipher.final('base64');
//
//     let decipher = crypto.createDecipheriv('des-ede3-cbc', encryption_key, iv);
//     let txt = decipher.update(ciph, 'base64', 'utf8');
//     txt += decipher.final('utf8');
//     expect(true).toBe(true)
// });
