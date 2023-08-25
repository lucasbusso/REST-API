import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    color: {
      type: String,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    year: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const itemModel = model("items", ItemSchema);
export default itemModel;
