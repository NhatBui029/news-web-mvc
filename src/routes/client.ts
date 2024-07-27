import express from "express";
import { getHomeClient, renderDetailPost } from "../controller/client";

const route = express.Router();

route.get('/post/:id',renderDetailPost)
route.get('/category/:id',getHomeClient)
route.get('/',getHomeClient)

module.exports= route;