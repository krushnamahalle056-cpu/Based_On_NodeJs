const express = require("express");
const {handelGetAllUsers, getUserById} = require("../controllers/user");

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


router.get('/', handleGetAllUsers , handleGetUserById, handlePatchUserById, handleDeleteUserById );         //   '/' ka matlab sabhi users milege

router
.route('/:id')
.get(handleGetUserById)
.patch(handlePatchUserById)
.delete(handleDeleteUserById);


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