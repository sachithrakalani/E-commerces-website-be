import express from "express";
import { createWine } from "../controllers/wineController.js";

const router = express.Router();

router.post("/wine", createWine);


export default router;