import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config'

it("Test __dirname", async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    console.log('__dirname', __dirname)

    return expect(__dirname).toBe(__dirname);
});