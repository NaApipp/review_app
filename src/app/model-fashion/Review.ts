import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  productId: string;
  rating: number;
  review: string;
  reviewer: string;
}

const ReviewSchema = new Schema<IReview>(
  {
    productId: {
      type: String,
      required: true,
      index: true
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    reviewer: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Review ||
  mongoose.model<IReview>("Reviews_fashion", ReviewSchema);
