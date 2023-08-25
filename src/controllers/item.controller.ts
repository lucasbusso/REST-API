import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertItem } from "../services/item.service";

// al ser MVC, aca solo voy a manejar la data a traves de http (request y response)

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, "ERROR_GET_ITEM", error);
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, "ERROR_GET_ITEMS", error);
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, "ERROR_UPDATE_ITEM", error);
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (error: any) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, "ERROR_DELETE_ITEM", error);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
