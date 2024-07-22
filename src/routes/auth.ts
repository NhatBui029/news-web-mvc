import express from "express";
import { getLogin, postLogin, postRegister } from "../controller/login";

const route = express.Router();

route.get('/',getLogin)
route.post('/login',postLogin)
route.post('/register',postRegister)

module.exports= route;