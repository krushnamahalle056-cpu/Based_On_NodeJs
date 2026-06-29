const User = require("../models/user");   // '../' means ek directory piche jana

async function handelGetAllUsers(req, res){
    const allDbUsers = await User.find ({}); 
    return res.json(allDbUsers);
}


module.exports = {
    handelGetAllUsers,

}