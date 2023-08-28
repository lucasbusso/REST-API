import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const verify = () => {};

export { encrypt, verify };
