import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()
mongoose.set('strictQuery', true)

/* export const main = async ()=>{
    await mongoose.connect(`mongodb+srv://${process.dotenv.DB_USER}:${process.dotenv.DB_PASS}@cluster0.s787g4p.mongodb.net/?retryWrites=true&w=majority`)
    console.log("MongoDB Atlas connected")
} */
/* export const main = async ()=>{
    await mongoose.connect("mongodb+srv://lhmaruyama:M7yXMtjgK4hGra0K@cluster0.s787g4p.mongodb.net/?retryWrites=true&w=majority")
    console.log("MongoDB Atlas connected")
} */
export const main = async ()=>{
    await mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ac-yc5mtnp-shard-00-00.s787g4p.mongodb.net:27017,ac-yc5mtnp-shard-00-01.s787g4p.mongodb.net:27017,ac-yc5mtnp-shard-00-02.s787g4p.mongodb.net:27017/?ssl=true&replicaSet=atlas-c3y6hj-shard-0&authSource=admin&retryWrites=true&w=majority`)
    console.log("MongoDB Atlas connected")
}
//main().catch(err=>{console.log(err)})