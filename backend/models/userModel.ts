import db from "../db/database";

export const getUserByUsername = (username: string) => {
  return db.prepare("SELECT * FROM users WHERE username = ?").get(username);
};

export const createUser = (
  username: string,
  password: string,
  role: string
) => {
  return db
    .prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)")
    .run(username, password, role);
};
