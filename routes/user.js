const express = require("express");

const router = express.Router();

// Routes


// router.get('/users',async(req,res) => {             // jab hum await ka use krte hai tab hame async function chahiye hota hai
//     const allDbUsers = await User.find ({});     //  ({})  ye empti ka matlab sabhi users find krne hai
//     const html = `
//     <ul>
//         ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join(" ")}
//     </ul>
//     `;
//     res.send(html);
// });


// REST API


router.get('/', async(req,res)=>{                   //   '/' ka matlab sabhi users milege
    const allDbUsers = await User.find ({}); 
    return res.json(allDbUsers);
});




router
.route('/:id')
.get(async(req,res) => {
    // const id = Number( req.params.id);
    // const user = users.find((user) => user.id === id);


    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    return res.json(user);
})
.patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id , { lastName:"Changed"});
    return res.json({status: "Success"});
})
.delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
});


router.post('/', async(req, res) => {
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


    return res.status(201).json({msg:"Success"});


});
 

module.exports = router;