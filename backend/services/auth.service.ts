import { Request } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db/database";

const SECRET_KEY = process.env.JWT_SECRET || "your-strong-secret-key";

export class AuthService {
  async login(username: string, password: string) {
    const user = db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
      expiresIn: "8h",
    });

    // Update last login
    db.prepare(
      "UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?"
    ).run(user.id);

    return { token, user: { id: user.id, role: user.role } };
  }

  async logActivity(userId: number, activityType: string, details: string) {
    db.prepare(
      "INSERT INTO activity_logs (user_id, activity_type, details) VALUES (?, ?, ?)"
    ).run(userId, activityType, details);
  }
}
