import mongoose from "mongoose"
const Schema = mongoose.Schema;

const House = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: "No house description given." }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;