import express from "express";
import { createWine, getAllWines } from "../controllers/wineController.js";

const router = express.Router();

router.post("/wine", createWine);
router.get("/wine", getAllWines);

export default router;
