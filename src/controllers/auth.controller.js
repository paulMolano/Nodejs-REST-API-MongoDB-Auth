import User from '../models/User'

export const signUp = async (req, res) =>{
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username: username,
        email: email,
        password: await User.encryptPassword(password),
    })

    console.log(newUser);
    res.json('signup')
}

export const signin = async (req, res) =>{
    const {username, email, password, roles} = req.body;

    console.log(req.body);


    res.json('siginp')
    
}