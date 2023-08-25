import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCars, getCar, insertCar } from "../services/item.service";

// al ser MVC, aca solo voy a manejar la data a traves de http (request y response)

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await getCar(id);
    res.send(item);
  } catch (error: any) {
    handleHttp(res, "ERROR_GET_ITEM", error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars();
    res.send(items);
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
    const responseItem = await insertCar(body);
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
