import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.schema";

const insertCar = async (item: Car): Promise<Car> => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async (): Promise<Car[]> => {
  const responseGet = await ItemModel.find({});
  return responseGet as Car[];
};

const getCar = async (id: string): Promise<Car> => {
  const responseGet = await ItemModel.findOne({ _id: id });
  return responseGet as Car;
};

export { insertCar, getCars, getCar };
