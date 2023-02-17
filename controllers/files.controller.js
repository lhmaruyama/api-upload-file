import { Files } from "../models/Files.js"
import fs from "fs"


export const create = async (req, res) => {
    //res.json({message: "Deu certo"})
    //res.json("Deu certo")
    //res.send("Deu certo")
    //res.send({message: "Deu certo"})
    try {
        const { name } = req.body
        const file = req.file
        const newFiles = new Files({
            name,
            src: file.path
        })
        await newFiles.save()

        return res.json({ message: "successfully saved image", newFiles })

    } catch (error) {
        res.status(500).json({ message: "Error saving image" })
    }
}

export const findAll = async (req, res) => {
    try {

        const findFiles = await Files.find()
        if (!findFiles) {
            return res.status(404).json({ message: "No files found" })
        }
        res.json(findFiles)

    } catch (error) {
        res.status(500).json({ message: "Error fetching image" })
    }
}

export const remove = async (req, res) => {
    try {

        const removeFiles = await Files.findById(req.params.id)

        if (!removeFiles) {
            return res.status(404).json({ message: "File not found" })
        }

        fs.unlinkSync(removeFiles.src)//remove arquivo do sistema
        await removeFiles.remove()//remove documento no banco dados

        res.json({ message: "Successfully removed file" })

    } catch (error) {
        res.status(500).json({ message: "Error deleting image" })
    }
}