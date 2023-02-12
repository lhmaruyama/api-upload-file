import mongoose from "mongoose"

const Schema = mongoose.Schema

const PictureSchema = new Schema({
    name: {type: String, require: true},
    src: {type: String, require: true}
})

export const Picture = mongoose.model("Picture", PictureSchema)