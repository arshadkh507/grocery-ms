import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-strong-secret-key";

export const authMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res.status(401).json({ message: "Authentication required" });

    try {
      const decoded = jwt.verify(token, SECRET_KEY) as any;

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Insufficient privileges" });
      }

      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};
