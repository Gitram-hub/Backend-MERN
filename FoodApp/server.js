import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resturantRoutes from "./routes/resturantRoutes.js";
import catgeoryRoutes from "./routes/catgeoryRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";

dotenv.config();

connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/resturant", resturantRoutes);
app.use("/api/v1/category", catgeoryRoutes);
app.use("/api/v1/food", foodRoutes);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});
