import { Secret, sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.02";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "10minutes",
  });
  return jwt;
};

const verifyToken = () => {};

export { generateToken, verifyToken };
