import { Request, Response } from "express";

export const getHomeAdmin = (req: Request, res: Response)=>{
    res.render('admin/home', {
        layout: 'admin'
    })
}