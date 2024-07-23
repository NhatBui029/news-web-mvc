import { Request, Response } from "express";
import { createUser, getUserByEmail, Role, User } from "../services/user";
import { jwtSign } from "../services/jwt";
const bcrypt = require("bcrypt");
const saltRounds = 10;

export const getLogin = (req: Request, res: Response) => {
  res.render("auth/login", {
    layout: "auth",
  });
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      res.render("auth/login", {
        layout: "auth",
        error: "Email không tồn tại !",
      });
      return;
    }
    if (!(await bcrypt.compare(password, user?.password))) {
      res.render("auth/login", {
        layout: "auth",
        error: "Mật khẩu không chính xác!",
      });
      return;
    }

    const token = await jwtSign(user?.id, user.role);
    res.cookie('token', token);

    res.redirect(user.role == Role.CLIENT ? '/client' : '/admin')
  } catch (error) {
    console.log("🚀 ~ postLogin ~ error:", error);
  }
};

export const postRegister = async (req: Request, res: Response) => {
  try {
    const { email, password, rePassword, name }: User = req.body;
    if (password != rePassword)
      res.render("auth/login", {
        layout: "auth",
        error1: "Xác nhận mật khẩu không khớp nhau !!",
      });
    const user = await getUserByEmail(email);
    if (user) {
      res.render("auth/login", {
        layout: "auth",
        error1: "Tài khoản đã tồn tại !!",
      });
    }
    const createdUser = await createUser({
      email,
      name,
      password: await bcrypt.hash(password, saltRounds),
    });

    res.redirect("/");
  } catch (error) {
    console.log("🚀 ~ postRegister ~ error:", error);
  }
};
