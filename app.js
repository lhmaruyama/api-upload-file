import express from "express"
const app = express()

import dotenv from "dotenv"
dotenv.config()

import { main } from "./db.js"
main().catch(err => { console.log(err) })

import routerCreate from "./routes/files.routes.js"
//app.use(express.json())
app.use("/", routerCreate)

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server running on port: ${port}`) }) 