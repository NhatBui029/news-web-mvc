import { Express } from 'express';
const auth = require('./auth')
const client = require('./client')
const admin = require('./admin')

function route(app: Express){
    app.use('/client',client)
    app.use('/admin',admin)
    app.use('/',auth)
}
module.exports= route;