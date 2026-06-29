const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const {connectMongoDb} = require("./Connection");

const userRouter = require("./routes/user");

const {logReqRes} = require("./Middleware/index");
const app = express();
const PORT = 8000;


// // Connection  -- Mongoose ka hoga

connectMongoDb("mongodb://127.0.0.1:27017/youtube-kru-1")

// Midelware - Plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));


// //Routes

app.use("./user", userRouter);

 
app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));

