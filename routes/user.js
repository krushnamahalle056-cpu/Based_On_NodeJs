const express = require("express");
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById, 
    handleCreateNewUser ,
} = require("../controllers/user");

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


router.get('/', handleGetAllUsers );         //   '/' ka matlab sabhi users milege

router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


router.post('/',handleCreateNewUser);
 

module.exports = router;