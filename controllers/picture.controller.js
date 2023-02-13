import {Picture} from "../models/Picture.js"
import fs from "fs"


export const create = async (req, res)=>{
    //res.json({message: "Deu certo"})
    //res.json("Deu certo")
    //res.send("Deu certo")
    //res.send({message: "Deu certo"})
    try {
        const {name} = req.body
        const file = req.file
        const picture = new Picture({
            name,
            src: file.path
        })
        await picture.save()

        return res.json({message: "successfully saved image",picture})

    } catch (error) {
        res.status(500).json({message: "Error saving image"})
    }
}

export const findAll = async (req, res)=>{
    try {

        const pictures = await Picture.find()

        res.json(pictures)

    } catch (error) {
        res.status(500).json({message: "Error fetching image"})
    }
}

export const remove = async (req, res)=>{
    try {

        const picture = await Picture.findById(req.params.id)

        if(!picture){
            return res.status(404).json({message: "File not found"})
        }

        fs.unlinkSync(picture.src)//remove arquivo do sistema
        await picture.remove()//remove documento no banco dados

        res.json({message: "Successfully removed file"})

    } catch (error) {
        res.status(500).json({message: "Error deleting image"})
    }
}