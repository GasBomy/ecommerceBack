import express from 'express'
import { getProducts, createProduct, deleteById , upDatosById } from '../dao/controllers/productsControllers.js'
import Products from "../dao/models/Products.js"


const productRouter = express.Router()




/* ========================================================= */

//guardar datos desde el front

productRouter.post('/updateProduct', async  (req, res)=>{
    const {nombre, precio, descripcion, imagen, codigo, existencia,categoria} = req.body

        if(nombre&&precio&&descripcion&&imagen&&codigo&&existencia&&categoria){
            const result = await createProduct({nombre, precio, descripcion, imagen, codigo, existencia,categoria})
            if(result) {       
                console.log('datos guardados')
                return res.send('datos guardados')
            }else{
                console.log('datos no guardados')
            }
        }
        res.json({
            mensaje:'no haz llenado todos los campos'
        })
})
/* =========================================================== */

//renderizamos los productos 

productRouter.get('/:categoria', async (req, res)=>{
    const { categoria: categoriaProduct}= req.params
    console.log('session', req.session)
    req.session.hola='hola'
    try{
        const findProducts = await getProducts(categoriaProduct)
        console.log(findProducts)
        res.send(findProducts)
    }catch(err){
        res.json({
            mensaje:'no pudimos encontrar los productos'
        })
    }
})

/* =========================================================== */

//eliminamos datos

productRouter.delete('/delete/:id', async (req, res)=>{
    const {id: productId} = req.params

    try{ 
        const deleteProductById = await deleteById(productId)
        console.log(deleteProductById )

        if(deleteProductById){
            console.log('eliminacion de producto exitosa')
            res.json({
                mensaje: 'eliminacion de producto exitosa'
            })
        }else{
            res.json({
                mensaje:'no pudimos eliminar el producto'
            })
        }
    }catch(err){
        console.error(err)
        res.status(500).json({
            mensaje:' error interno del servidor al eliminar  el producto'
        })
    }
})


/* ===================================================== */

//actualizamos productos

productRouter.put('/update/:id', async (req, res)=>{
    /* const {id} = req.params */
    const id= req.params.id
    try{
       /*  const updateProduct = await Products.findByIdAndUpdate({_id:id},req.body,{new:true}) */
        const updateProduct = await upDatosById(id,req.body)
        console.log(updateProduct)
        if(updateProduct){
            res.json({
                mensaje: 'producto editado/actualizado exitosamente'
            })
        }else{
            res.json({
                mensaje:'no pudimos actualizar los datos'
            })
        }
    }catch(err){
        res.status(500).json({
            mensaje:' error interno del servidor al actualizar  el producto'
        })
    }
})

export default productRouter