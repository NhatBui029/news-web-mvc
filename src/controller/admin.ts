import { Request, Response } from "express";
import { createPost, getPostById, getPosts, getPostsStored, removePost, updatePost } from "../services/post";

export const getHomeAdmin =async (req: Request, res: Response) => {
  res.render("admin/home", {
    layout: "admin",
    posts: await getPosts()
  });
};

export const getStoredAdmin =async (req: Request, res: Response) => {
  res.render("admin/stored", {
    layout: "admin",
    posts: await getPostsStored()
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
    res.redirect("/admin");
  } catch (error) {
    console.log("🚀 ~ CreatePost ~ error:", error);
  }
};

export const restorePost = async (req: Request, res: Response) => {
  try {
    const updatedAt = await updatePost(parseInt(req.params.id), {deletedAt: null});
    res.redirect("/admin");
  } catch (error) {
    console.log("🚀 ~ CreatePost ~ error:", error);
  }
};

export const editPost = async (req: Request, res: Response) => {
  try {
    const updatedAtPost = await updatePost(parseInt(req.params.id), req.body);
    res.redirect("/admin");
  } catch (error) {
    console.log("🚀 ~ CreatePost ~ error:", error);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const updatedAtPost = await removePost(parseInt(req.params.id));
    res.redirect("/admin");
  } catch (error) {
    console.log("🚀 ~ CreatePost ~ error:", error);
  }
};

export const getEditPost = async (req: Request, res: Response) => {
  try {
    const post = await getPostById(parseInt(req.params.id));
    console.log(post?.title)
    res.render("admin/edit-post", {
      layout: "admin",
      id: post?.id,
      post
    });
  } catch (error) {
    console.log("🚀 ~ CreatePost ~ error:", error);
  }
}
