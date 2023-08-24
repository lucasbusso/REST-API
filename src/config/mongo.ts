import "dotenv/config";
import mongoose, { connect } from "mongoose";

mongoose.set("strictQuery", false);
async function dbConnect(): Promise<void> {
  const dbURI = <string>process.env.DB_URI;
  await connect(dbURI);
}

export default dbConnect;
