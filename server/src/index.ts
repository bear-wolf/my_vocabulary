import express from 'express'
import 'dotenv/config'
import routes from '../boot/routes';
import config from '../boot/config';
import swaggerDocs from './swagger'
import os from 'os';
import cluster from 'cluster';

const app = express();
const port = process.env.PORT;

swaggerDocs(app, port)
config(app)
routes(app)

// Clusterization the node application
if (cluster.isMaster) {
    const numCPUs = 1 || os.cpus().length;
    console.log('number of CPUs', numCPUs)

    for (let i = 0; i < numCPUs; i++) cluster.fork();

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });
}

if (cluster.isWorker) {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}