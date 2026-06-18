const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Midelware - Plugin
app.use(express.urlencoded({extended:false}));

// Routes

app.get('/users',(req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
    </ul>
    `
    res.send(html);
})

// REST API


app.get('/api/users',(req,res)=>{
    return res.json(users);
});


// // niche ka pura code different way main likha hai
app.get('/api/users/:id', (req,res) =>{
    const id = Number( req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

// app.post('/api/users' , (req,res) =>{
//     // TODO Create new user 
//     return res.json({Status:"pending"});
// });

// app.patch('/api/users/:id', (req,res) =>{
//     // TODO : Edit the user with id
//     return res.json({Status:"pending"});
// });

// app.delete('/api/users/:id' , (req,res) =>{
//     // TODO Create new user 
//     return res.json({Status:"pending"});
// });


// app
// .route('/api/users/:id')
// .get((req,res) => {
//     const id = Number( req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })
// .post((req,res)=>{
//     return res.json({Status:"pending"});
// })                 
// .patch((req,res) =>{ })   
// .delete((req,res) =>{ })   



    // app.post("/api/users",(req,res)=>{
    //     const body = req.body;
    //     users.push({...body, id: users.length+1});
    //     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
    //         return res.json({status:"success" , id: users.length});
    //     });
    // });

   app.post("/api/users/:id",( req,res)=>{
        const id = Number(req.params.id);
            const user = users.find((user) => user.id === id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            const body = req.body;
            Object.assign(user, body);
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
                return res.json({ status: "success", user });
            });
    });




    app.patch("/api/users/:id",(req,res)=>{
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const body = req.body;
        Object.assign(user, body);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.json({ status: "success", user });
        });
    });

    app.delete("/api/users/:id",(req,res)=>{
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



app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));
