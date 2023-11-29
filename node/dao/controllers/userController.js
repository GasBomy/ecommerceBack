import Users from "../models/Users.js"
import bcrypt from 'bcrypt'


const findUser=async(nombre)=>{
    return await Users.findOne(nombre)
}
//guardar usuarios registrados
const createUser = async (user)=>{
    const newUser = new Users(user)
    return await newUser.save()
}
//mostrar usurios
const showUsers= async()=>{
    return await Users.find()
}
//eliminar usuarios
const deleteUser = async(userId)=>{
    return await Users.findByIdAndDelete(userId)
}

const isValidCredential= async(user)=>{
const userFound= await Users.findOne({email: user.email})
console.log(userFound)
console.log(user)
if(userFound){
    const passMatched= await bcrypt.compare(user.password, userFound.password) //<==comparacion entre la contraseña de la base de datos y la tipeada por el usuario
    console.log(passMatched)
    if(passMatched){
        console.log('contraseña correcta')
        return {ok: true, userFound}
    }
}else{
    console.log('usuario no registrado')
}
return {ok: false, message: 'No existe un usuario con esas credenciales!'}
}

export {createUser, findUser,showUsers, deleteUser,isValidCredential}