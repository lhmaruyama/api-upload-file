import express from "express";
import { create, findAll, remove } from "../controllers/files.controller.js"
import { upload } from "../config/multer.js"
const router = express.Router()

//router.post("/", create)

router.post("/create", upload.single("file"), create)
router.get("/find", findAll)
router.delete("/remove/:id", remove)

export default router