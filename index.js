const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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



app.post('/api/users', (req, res) => {
    const body = req.body;

    users.push({
        ...body,
        id: users.length + 1,
    });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
        if (err) {
            return res.status(500).json({ status: "Error writing file" });
        }
        return res.status(201).json({ status:"success",id: users.length});
    });
});
 



// app.post("/api/users/:id",( req,res)=>{
//     const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         const body = req.body;
//         Object.assign(user, body);
//         fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//             return res.json({ status: "success", user });
//         });
// });

app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));

// kuch changes krne ke bad hame server ko restart karna padta hai us problem ko solve krne ke liye use nodemone (install nodemon)
// nodemon kya krta hai jab bhi hum file main changes krte hai our save krte hai to atuomaticaly run hota hai  lekin pahle npm start krna padta hai