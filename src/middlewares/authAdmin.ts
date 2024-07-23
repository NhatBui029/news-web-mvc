import { NextFunction, Request, Response } from "express";
import { jwtVerify } from "../services/jwt";
import { Role } from "../services/user";

export default async function authAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;
  const data = await jwtVerify(token);
  if (data.role == Role.ADMIN) {
    req.headers["data"] = data;
    next();
  } else res.send("Invalid Token!");
}
