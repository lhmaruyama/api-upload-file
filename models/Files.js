import mongoose from "mongoose"

const Schema = mongoose.Schema

const FilesSchema = new Schema({
    name: {type: String, require: true},
    src: {type: String, require: true}
})

export const Files = mongoose.model("Files", FilesSchema)