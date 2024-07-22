import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../services/user";

export const getLogin = (req: Request, res: Response) => {
    res.render('auth/login', {
        layout: 'auth'
    })
}

export const postLogin = async (req: Request, res: Response)=> {
    const {email, password} = req.body;
    const user = await getUserByEmail(email);
}

export const postRegister= async (req: Request, res: Response)=> {
    const {email, password, name} = req.body;
    const user = await getUserByEmail(email);
    if(user) {
        res.render('login', {
            layout: 'login',
            error1: 'Tài khoản đã tồn tại !!'
        })
    }
    const createdUser = await createUser(req.body);
}