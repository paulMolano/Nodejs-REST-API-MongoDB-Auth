import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    roles: []
})

export default model('User', userSchema)
