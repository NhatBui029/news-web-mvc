import express from "express";
import { getCreatePost, getHomeAdmin ,CreatePost} from "../controller/admin";
import changeBodyPost from "../middlewares/changeBodyPost";

const route = express.Router();

route.get('/create-post',getCreatePost)
route.post('/post',changeBodyPost,CreatePost)
route.get('/',getHomeAdmin)

module.exports= route;