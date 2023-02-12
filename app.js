import express from "express"
const app = express()

import dotenv from "dotenv"
dotenv.config()

import {main} from "./db.js"
main().catch(err=>{console.log(err)})

const port = process.env.PORT || 3000

app.listen(port, ()=>{console.log(`Server running on port: ${port}`)}) 