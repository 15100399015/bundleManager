import { Router } from "express";
import { router as bundleRouter } from "./bundle";
import { router as publishRouter } from "./publish";

export const router = Router();

router.use("/bundle", bundleRouter);
router.use("/publish", publishRouter);
