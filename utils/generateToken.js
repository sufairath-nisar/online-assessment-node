import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret_key = process.env.SECRET_KEY;

export const generateToken = (username) => {
  return jwt.sign({ data: username }, secret_key, { expiresIn: "1d" });
};
