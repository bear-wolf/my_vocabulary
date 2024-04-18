import express from 'express'
import bodyParser from "body-parser"
import cors from 'cors'

export default function(app: any) {
    app.set('port', process.env.PORT);
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(cors())
    app.use(express.json()); // For parsing application/json
    app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
}

