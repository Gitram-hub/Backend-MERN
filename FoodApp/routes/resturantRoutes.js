import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} from "../controllers/resturantController.js";

const router = express.Router();

router.post("/create", authMiddleware, createResturantController);
router.get("/getAll", getAllResturantController);
router.get("/get/:id", getResturantByIdController);
router.delete("/delete/:id", authMiddleware, deleteResturantController);

export default router;
