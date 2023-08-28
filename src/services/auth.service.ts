import { compare } from "bcryptjs";
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

const loginUser = async ({ email, password }: Auth) => {
  const checkIfExists = await UserModel.findOne({ email: email });
  if (!checkIfExists) return "USER_NO_TFOUND";
  const passwordEncrypted = checkIfExists.password;
  const isCorrect = await compare(password, passwordEncrypted);
  if (!isCorrect) return "WRON_PASSWORD";
  return checkIfExists;
};

export { registerNewUser, loginUser };
