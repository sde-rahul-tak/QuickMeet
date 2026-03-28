import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.rout.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server); 

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit:"40kb", extended : true}))

app.get("/home", (req, res)=>{
    return res.json({"hello" : "Rahul Tak ! {its working find}"})
});

app.use("/api/v1/users", userRoutes);

const start = async ()=>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb://codebaserahul_db_user:Quickmeet@ac-c5ieo8o-shard-00-00.4hllpd6.mongodb.net:27017,ac-c5ieo8o-shard-00-01.4hllpd6.mongodb.net:27017,ac-c5ieo8o-shard-00-02.4hllpd6.mongodb.net:27017/quickmeet?ssl=true&replicaSet=atlas-bb0lpl-shard-0&authSource=admin&appName=Cluster0");
    
    console.log(`MONGO Connected DB Host : ${connectionDb.connection.host}`);
    
    server.listen(app.get("port"), ()=>{
        console.log("Listenin on port number 8000")
    })
}

start();