import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./routes/index";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(router);

db().then(() => {
  console.log("conexion DB lista");
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
