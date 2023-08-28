import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtRaw = req.headers.authorization || "";
    const jwt = jwtRaw.split(" ").pop();
    const user = verifyToken(`${jwt}`);
    console.log(user);
    if (!user) {
      res.status(401).send("PERMISSION_DENIED");
    } else {
      next();
    }
  } catch (error) {
    res.status(400).send("CANT_ACCESS");
  }
};

export { checkJWT };
