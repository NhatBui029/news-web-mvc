import express from "express";
import { getHomeClient } from "../controller/client";

const route = express.Router();

route.get('/',getHomeClient)

module.exports= route;