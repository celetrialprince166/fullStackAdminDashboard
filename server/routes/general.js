import express from "express";
import { getUser, getDashbordStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashbordStats);

export default router;
