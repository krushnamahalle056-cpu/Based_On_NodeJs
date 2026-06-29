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

async function handlePostUser(req, res){
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

}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handlePatchUserById,
    handleDeleteUserById,
    handlePostUser,


}
