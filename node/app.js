import  mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
/* import Products from './dao/models/Products.js' */
import productRouter from './routes/productsRouters.js'
import  userRouter  from './routes/userRouters.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()

const PORT = process.env.PORT || 8080 

const DB_NAME= process.env.DB_NAME
const DB_PASSWORD= process.env.DB_PASSWORD

const URL_CONNECTION = `mongodb+srv://ecommerce-gasbomy:${DB_PASSWORD}@cluster0.yuznrqf.mongodb.net/${DB_NAME}`
mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true
    }
)
.then(()=>{
    console.log('conexion a mongo atlas exitosa')
})
.catch((err)=>{
    console.error('error al conectarse a la base de datos')
    console.error(err)
})


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret:'bomy',
    resave:'false',
    saveUninitialized:false
}))
app.use(cookieParser())



/* ======================================================== */
app.get('/', (req, res)=>{
    res.send('hello world')
})
app.use('/products', productRouter)
app.use('/user', userRouter)

/* ==================================================== */

//conectamos el servidor

app.listen(PORT, ()=>{
    console.log(`corriendo en el puerto http://localhost:${PORT}`)
})

