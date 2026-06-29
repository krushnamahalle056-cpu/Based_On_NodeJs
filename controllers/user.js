const User = require("../models/user");   // '../' means ek directory piche jana

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find ({}); 
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    return res.json(user);
}


module.exports = {
    handelGetAllUsers,
    getUserById,

}
