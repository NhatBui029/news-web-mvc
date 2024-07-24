import { Request, Response } from "express";
import { createPost, getPosts } from "../services/post";

export const getHomeAdmin =async (req: Request, res: Response) => {
  res.render("admin/home", {
    layout: "admin",
    posts: await getPosts()
  });
};

export const getCreatePost = (req: Request, res: Response) => {
  res.render("admin/create-post", {
    layout: "admin",
  });
};

export const CreatePost = async (req: Request, res: Response) => {
  try {
    const createdPost = await createPost(req.body);
    console.log("🚀 ~ CreatePost ~ createdPost:", createdPost);
    res.redirect("/admin");
  } catch (error) {
    console.log("🚀 ~ CreatePost ~ error:", error);
  }
};
