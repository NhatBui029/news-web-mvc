import {
  getPostById,
  getPostsByCategory,
  updatePost,
} from "./../services/post";
import { Request, Response } from "express";
import { getPosts } from "../services/post";

export const getHomeClient = async (req: Request, res: Response) => {
  const posts = req.params.id
    ? await getPostsByCategory(0, Number(req.params.id))
    : await getPosts();
  res.render("client/home", {
    layout: "client",
    posts,
  });
};

export const renderDetailPost = async (req: Request, res: Response) => {
  try {
    const post = await getPostById(Number(req.params.id));
    const categories = await getPostsByCategory(post?.id, post?.categoryId);
    await updatePost(post?.id ?? 0, { view: post?.view ? post?.view + 1 : 1 });

    res.render("client/detail", {
      layout: "client",
      post,
      categories: categories.slice(0, 3),
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};
