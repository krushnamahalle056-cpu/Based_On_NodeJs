const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Connection  -- Mongoose ka hoga

mongoose
.connect("mongodb://127.0.0.1:27017/youtube-kru-1")      // connect kiya using url 
.then(()=> console.log("MongoDB connected"))             // use kiya then and catch  (like try catch)   
.catch((err) => console.log("Mongo Error",err));


// Schema      // -- MongoDB lecture --

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true,   // require true means firstName jaruri hai 
    },
    lastName : {
        type : String,
    },
    email:{
        type : String,
        require : true,    // require true means email jaruri hai 
        unique: true,     // unique true means koi same email id nhi bana sakta
    },
    jobTitle:{
        type: String
    },
    gender:{
        type : String
    }
});

const User = mongoose.model('user', userSchema);

// Midelware - Plugin
app.use(express.urlencoded({extended:false}));

// // I create a middleware 
// app.use((req,res,next) =>{
//     console.log("this is middlewere");
//     return next();
// })

// Routes

app.get('/users',(req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
    </ul>
    `;
    res.send(html);
});

// REST API

app.get('/api/users',(req,res)=>{
    
    res.setHeader("X-MyName","Krushna mahalle");  // Custom Header
    // Always add X to custum headers

    return res.json(users);
});


// // // niche ka pura code different way main likha hai
// app.get('/api/users/:id', (req,res) =>{
//     const id = Number( req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });


app
.route('/api/users/:id')
.get((req,res) => {
    const id = Number( req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    return res.json(user);
})
.patch((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const body = req.body;
    console.log(user);
    console.log(req.body);
    Object.assign(user, body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json(user);
    });
})
.delete((req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    users.splice(index, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" });
    });
});



app.post('/api/users', async(req, res) => {
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        return res.status(400).json({msg: "All fields are required"});
    };

    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name ,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    });
    
    console.log("result"+ result);

    return res.status(201).json({msg:"Success"});

});
 


app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));

// kuch changes krne ke bad hame server ko restart karna padta hai us problem ko solve krne ke liye use nodemone (install nodemon)
// nodemon kya krta hai jab bhi hum file main changes krte hai our save krte hai to atuomaticaly run hota hai  lekin pahle npm start krna padta hai