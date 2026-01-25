import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    reviewId: { type: String, required: true, unique: true },
    review: { type: String, required: true },

    label: {
      type: String,
      enum: ["fake", "non_fake", "no_action"],
      default: "no_action",
    },

    labeledBy: { type: String, default: null },
    labeledAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const Review = models.Review || model("Review", ReviewSchema);
