import express from "express";
import {
  createAdmin,
  getAdminById,
  getAllAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/admin", createAdmin);
router.get("/admin", getAllAdmin);
router.get("/admin/:id", getAdminById);

export default router;
