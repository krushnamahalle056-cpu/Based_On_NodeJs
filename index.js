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
// 
// app.get('/users',async(req,res) => {             // jab hum await ka use krte hai tab hame async function chahiye hota hai
    // const allDbUsers = await User.find ({});     //  ({})  ye empti ka matlab sabhi users find krne hai
    // const html = `
    // <ul>
        // ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join(" ")}
    // </ul>
    // `;
    // res.send(html);
// });
// 
// //REST API
// 
// app.get('/api/users', async(req,res)=>{
    // const allDbUsers = await User.find ({}); 
   // res.setHeader("X-MyName","Krushna mahalle");  // Custom Header
    // Always add X to custum headers
    // return res.json(allDbUsers);
// });
// 
// 
// app
// .route('/api/users/:id')
// .get(async(req,res) => {
    //const id = Number( req.params.id);
    //const user = users.find((user) => user.id === id);
// 
    // const user = await User.findById(req.params.id);
    // if(!user){
        // return res.status(404).json({error: "User not found"});
    // }
    // return res.json(user);
// })
// .patch(async(req,res)=>{
    // await User.findByIdAndUpdate(req.params.id , { lastName:"Changed"});
    // return res.json({status: "Success"});
// })
// .delete(async(req,res)=>{
    // await User.findByIdAndDelete(req.params.id);
    // return res.json({status: "Success"});
// });
// 
// app.post('/api/users', async(req, res) => {
    // const body = req.body;
    // if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        // return res.status(400).json({msg: "All fields are required"});
    // };
// 
    // const result = await User.create({
        // firstName:body.first_name,
        // lastName:body.last_name ,
        // email:body.email,
        // gender:body.gender,
        // jobTitle:body.job_title,
    // });
// 
    // return res.status(201).json({msg:"Success"});
// 
// });
//  

app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));

// kuch changes krne ke bad hame server ko restart karna padta hai us problem ko solve krne ke liye use nodemone (install nodemon)
// nodemon kya krta hai jab bhi hum file main changes krte hai our save krte hai to atuomaticaly run hota hai  lekin pahle npm start krna padta hai