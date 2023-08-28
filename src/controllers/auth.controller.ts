import { Request, Response } from "express";

import { loginUser, registerNewUser } from "../services/auth.service";

const registerController = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.status(200).send(responseUser);
};

const loginController = async (req: Request, res: Response) => {};

export { registerController, loginController };
