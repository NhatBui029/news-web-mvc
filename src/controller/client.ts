import { Request, Response } from "express";

export const getHomeClient = (req: Request, res: Response)=>{
    res.render('client/home', {
        layout: 'client'
    })
}