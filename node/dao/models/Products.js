import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD
const URL_CONNECTION = `mongodb+srv://ecommerce-gasbomy:${DB_PASSWORD}@cluster0.yuznrqf.mongodb.net/${DB_NAME}`

mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true
    }
)

const ProductSchema = new mongoose.Schema({
nombre:{
    type: String,
    required: true
},
precio:{
    type: Number,
    required: true
},
descripcion:{ 
    type: String,
    required: true
},
imagen:{
    type: String,
    required: true
},
existencia:{
    type: Number,
    required: true
},
codigo:{
    type: String,
    required: true
},
categoria:{
    type: String,
    required:true
}
})

const Products = mongoose.model('productos', ProductSchema)

export default Products


/* "nombre": "guitarra fender",
"precio": 5000,
"descripcion": "guitarra de 6 cuerdas",
"imagen": "https://th.bing.com/th/id/OIP.xuU6QmOiK76V4T5yBxTrIwHaHM?rs=1&pid=ImgDetMain",
"existencia": 45,
"codigo": "34534634",
"categoria": "guitarra electrica" */