import express from "express";
import {
  createWine,
  getAllWines,
  getWineById,
  updateWine,
} from "../controllers/wineController.js";

const router = express.Router();

router.post("/wine", createWine);
router.get("/wine", getAllWines);
router.get("/wine/:id", getWineById);
router.put("/wine/:id", updateWine);

export default router;
