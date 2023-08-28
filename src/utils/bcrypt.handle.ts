import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const verify = async (password: string, encrypted: string) => {
  const isCorrect = await compare(password, encrypted);
  return isCorrect;
};

export { encrypt, verify };
