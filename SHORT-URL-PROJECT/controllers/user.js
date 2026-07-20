const User = require('../models/user');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });

    return res.render("home");   

    // try {
    //     const user = new User({ name, email, password });
    //     await user.save();
    //     res.status(201).json({ message: 'User created successfully' });
    // } catch (error) {
    //     res.status(400).json({ error: error.message });
    // }
}