// import mongoose, { Schema, Document } from "mongoose";
import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  productId: string;
  produkName: string;
  platform: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    productId: { type: String, required: true, unique: true },
    produkName: { type: String, required: true },
    platform: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);