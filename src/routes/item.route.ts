import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item.controller";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/:id", logMiddleware, getItem);
router.get("/", getItems);
router.put("/:id", updateItem);
router.post("/", postItem);
router.delete("/:id", deleteItem);

export { router };
