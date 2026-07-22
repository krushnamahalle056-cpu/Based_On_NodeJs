// const { model } = require('mongoose');
const User = require('../models/user');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/");   // after creating the user back to the signup page 
 
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({email, password});

    if(!user) return res.render("login",{
        error: "invalid Username or Password",
    
    });

    return res.redirect("/");   // after creating the user back to the signup page 
}

module.exports={
    handleUserSignup,
    handleUserLogin,

}