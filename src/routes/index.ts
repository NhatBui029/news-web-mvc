import { Express } from 'express';
import authAdmin from '../middlewares/authAdmin';
const auth = require('./auth')
const client = require('./client')
const admin = require('./admin')

function route(app: Express){
    app.use('/client',client)
    app.use('/admin',authAdmin,admin)
    app.use('/',auth)
}
module.exports= route;