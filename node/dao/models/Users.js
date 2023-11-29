import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

const Users = mongoose.model('user', UserSchema)

export default Users