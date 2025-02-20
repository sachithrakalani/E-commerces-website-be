import express from "express";
import { createAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/admin", createAdmin);

export default router;