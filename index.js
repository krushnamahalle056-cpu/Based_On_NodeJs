const express = require("express");

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
// app.get('/api/users/:id', (req,res) =>{
//     const id = Number( req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

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



    app.post("/api/users",(req,res)=>{
        const body = req.body;
        console.log("body",body);
        return res.json({status:"success"})
    })


app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));
