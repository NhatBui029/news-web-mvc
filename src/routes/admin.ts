import express from "express";
import { getHomeAdmin } from "../controller/admin";

const route = express.Router();

route.get('/',getHomeAdmin)

module.exports= route;