import express, { Request, Response } from "express";

const route = express.Router();

route.get('/',(req: Request, res: Response) => {
    res.render('auth/login', {
        layout: 'auth'
    })
})

module.exports= route;