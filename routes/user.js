const express = require("express");
const {handelGetAllUsers, getUserById, handlePostUser} = require("../controllers/user");

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


router.post('/',handlePostUser);
 

module.exports = router;