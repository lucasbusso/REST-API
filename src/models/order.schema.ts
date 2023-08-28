import { Schema, model } from "mongoose";
import { Order } from "../interfaces/order.interface";

const OrderSchema = new Schema<Order>(
  {
    itemName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model("items", OrderSchema);
export { OrderModel };
