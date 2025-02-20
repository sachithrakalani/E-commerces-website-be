import express from "express";
import { createAdmin, getAllAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/admin", createAdmin);
router.get("/admin", getAllAdmin);

export default router;
