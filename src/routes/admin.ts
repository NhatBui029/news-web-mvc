import express from "express";
import {
  getCreatePost,
  getHomeAdmin,
  CreatePost,
  getEditPost,
  editPost,
  deletePost,
  getStoredAdmin,
  restorePost,
} from "../controller/admin";
import changeBodyPost from "../middlewares/changeBodyPost";

const route = express.Router();

route.get("/create-post", getCreatePost);
route.get("/post/stored", getStoredAdmin);
route.get("/restore/:id", restorePost);
route.get("/post/:id", getEditPost);
route.get("/delete/:id", deletePost);
route.post("/edit/post/:id", changeBodyPost, editPost);
route.post("/post", changeBodyPost, CreatePost);
route.get("/", getHomeAdmin);

module.exports = route;
