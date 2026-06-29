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

async function handlePatchUserById(req, res){
    await User.findByIdAndUpdate(req.params.id , { lastName:"Changed"});
    return res.json({status: "Success"});
}

async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
}

module.exports = {
    handelGetAllUsers,
    getUserById,

}
