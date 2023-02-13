import express from "express";
import { create, findAll, remove } from "../controllers/picture.controller.js"
import { upload } from "../config/multer.js"
const router = express.Router()

//router.post("/", create)

router.post("/", upload.single("file"), create)
router.get("/", findAll)
router.delete("/:id", remove)

export default router