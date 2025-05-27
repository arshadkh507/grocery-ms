import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUserByUsername } from "../models/userModel";

const JWT_SECRET = "your-very-secure-secret"; // move to .env

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = getUserByUsername(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ token });
};
