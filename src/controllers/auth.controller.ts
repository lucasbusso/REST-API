import { Request, Response } from "express";

import { loginUser, registerNewUser } from "../services/auth.service";

const registerController = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.status(200).send(responseUser);
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "WRONG_PASSWORD") {
    return res.status(403).send(responseUser);
  } else {
    res.status(200).send(responseUser);
  }
};

export { registerController, loginController };
