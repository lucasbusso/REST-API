import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

// al ser MVC, aca solo voy a manejar la data a traves de http (request y response)

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
