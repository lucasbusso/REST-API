import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.schema";
import { encrypt } from "../utils/bcrypt.handle";

const registerNewUser = async (authUser: User) => {
  const { email, password, name } = authUser;
  const checkIfExists = await UserModel.findOne({ email: authUser.email });
  if (checkIfExists) return "EMAIL_REGISTERED";
  const encryptedPassword = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: encryptedPassword,
    name,
  });
  return registerNewUser;
};

const loginUser = async () => {};

export { registerNewUser, loginUser };
