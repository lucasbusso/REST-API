import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/reqExt.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("PERMISSION_DENIED");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("PERMISSIN_DENIED");
  }
};

export { checkJwt };
