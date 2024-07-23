import express, { Request, Response } from "express";
import { getLogin, postLogin, postRegister } from "../controller/auth";

const route = express.Router();

route.post('/login',postLogin)
route.post('/register',postRegister)
route.get('/',getLogin)

module.exports= route;