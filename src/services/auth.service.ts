import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.schema";

const registerNewUser = async (authUser: User) => {
  const { email, password, name } = authUser;
  const checkIfExists = await UserModel.findOne({ email: authUser.email });
  if (checkIfExists) return "EMAIL_REGISTERED";

  const registerNewUser = await UserModel.create({ email, password, name });
  return registerNewUser;
};

const loginUser = async () => {};

export { registerNewUser, loginUser };
