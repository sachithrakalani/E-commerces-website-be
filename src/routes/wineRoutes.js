import express from "express";
import {
  createWine,
  getAllWines,
  getWineById,
} from "../controllers/wineController.js";

const router = express.Router();

router.post("/wine", createWine);
router.get("/wine", getAllWines);
router.get("/wine/:id", getWineById);

export default router;
