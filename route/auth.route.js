import express from "express";
import { login, registerController } from "../controllers/auth.controller.js";

const router = express();

router.post("/register", registerController);
router.post("/login", login);

export default router;
