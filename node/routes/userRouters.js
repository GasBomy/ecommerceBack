
import express from 'express'
import bcrypt from "bcrypt"
import { createUser,findUser, showUsers,deleteUser, isValidCredential } from '../dao/controllers/userController.js'
import Users from '../dao/models/Users.js'
/* import session from 'express-session' */


const userRouter = express.Router()



userRouter.get('/register', (req, res)=>{
    return res.send('Registro exitoso!!!')
})

//creacion de usario
userRouter.post('/register', async (req, res)=>{
    try{
        const user = req.body
        let salt= bcrypt.genSaltSync(10)
        let hashedPassword= bcrypt.hashSync(user.password,salt) //<==encriptacion de la contraseña del usuario
        let userNew = await createUser({...user, password:hashedPassword})
        console.log(userNew)
        res.status(200).json({
            mensaje:'Registro Exitoso!!!'
        })
    }catch(err){
        console.error(err)
        console.log('error en el servidor al crear usuario')
    }

})

//mostrar usuarios
userRouter.get('/list', async (req, res)=>{
    try{
        const Users = await showUsers()
        console.log(Users)
        res.status(200).json({
            mensaje:'estos son los usuarios',
            Users
        })
    }catch(err){
        console.log('no pudimos encontrar los datos')
        res.status(500)
    }
})

//delete usuario
userRouter.delete('/delete/:id', async (req, res)=>{
    const {id: userId}= req.params
    try{
        const deleteById= await deleteUser(userId)
        console.log('usuario eliminado:' + deleteById)
        res.sendStatus(200)
    }catch(err){
        console.error('error al eliminar usuario intente de nuevo')
        res.sendStatus(500)
    }
})
//editamos usuarios
userRouter.put('/list/update/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const editUser= await Users.findByIdAndUpdate(id,req.body,{new: true})
        console.log(editUser)
        res.sendStatus(200)
    }catch(err){
        console.log('error en interno al actualizar')
        res.sendStatus(500)
    }

})



/* ============================================================= */
//LOGIN USUARIOS

userRouter.post('/login', async(req, res)=>{
    const {email, password}= req.body
    /* constante para manejar error */
    const user = {email,password}
    let result = await isValidCredential(user)
    console.log(result)
    req.session.user= result.userFound //<===creo una sesion con el usuario logueado
    console.log('el string q queremos ver', req.session)
    if(result.ok){
        console.log('el usuario esta logueado')
        res.sendStatus(200)
    }else{
        console.log('el usuario no existe')
        res.sendStatus(500)
    }
})



export default userRouter