import express, { json } from 'express';

import { Server } from 'socket.io';
import { createServer } from "http";
import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer,{})

io.on("connection",(verification_notification)=>{
    console.log("verification is completed",verification_notification.id)
    // Socket.on("chat",(payload)=>{
    //     console.log("payload",chat)
    // })
})

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use(express.json({limit:"16kb"})) // this is use to set be json limit
app.use(express.urlencoded({extended:true,limit:"16kb"})) // this is use to unecoded url 
// app.use(express.static("public"))
app.use(express.static(path.resolve("/public")))
app.use(cookieParser())


// routes import 

import userRouter from "./routes/user.routes.js"
import videosRouter from "./routes/video.routes.js"
import { Socket } from 'dgram';

// routes declaration

app.use("/users",userRouter)
app.use("/videos",videosRouter)
 
export {httpServer}