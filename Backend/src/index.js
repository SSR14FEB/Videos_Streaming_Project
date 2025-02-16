import dotenv from 'dotenv'
import { asyncHandler } from './utils/asyncHandler.js'
import connectDB from './db_connection/index.js'
// import { app } from './app.js'
import { registerUser } from './controllers/users.controllers.js'
import {httpServer} from './app.js'

dotenv.config({
    path:'./env'
})

//MONGODB CONNECTION 
connectDB()
.then(()=>{
    httpServer.listen(process.env.PORT||8201,()=>{
    console.log(`SERVER IS RUNNIG ON PROT || ${process.env.PORT}`)
})
httpServer.on("error",(error)=>{
    console.log(`MONGODB CONNECTION ERROR || ${error}`)
})
})
.catch((error)=>{
    console.log(`MONGODB CONNECTION FAILD || ${error}`);
    process.exit(1)
})

