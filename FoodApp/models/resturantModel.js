import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, " Resturant title is required"],
    },
    imageUrl: String,
    foods: Array,
    time: String,
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoUrl: String,
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: String,
    code: String,
    coords: {
      id: String,
      latitude: Number,
      latitudeDelta: Number,
      longitude: Number,
      longitudeDelta: Number,
      address: String,
      title: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Resturant", resturantSchema);
