import User from '../models/User'

export const signUp = async (req, res) =>{
    const {username, email, password, roles} = req.body;

    const user = new User({
        username,
        email,
        password
    })

    console.log(req.body);
    res.json('signup')
}

export const signin = async (req, res) =>{
    const {username, email, password, roles} = req.body;

    console.log(req.body);


    res.json('siginp')
    
}