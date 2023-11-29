import Products from "../models/Products.js";


//funcion para crear datos

const createProduct = async (product)=>{
    try{
        const newProducts = new Products(product)
        await newProducts.save()
        console.log('producto guardado exitosamenta')
        return true
    }catch(err){
        if(err){throw err}
    }
}


// controller para obtener datos

const getProducts = async (categoriaProduct)=>{
    return await Products.find({categoria: categoriaProduct})
}

// controller para editar/actualizar datos

const upDatosById = async (id)=>{
    return await Products.findByIdAndUpdate({_id:id},{new: true})
}
// controller para eliminar datos
const deleteById= async (productId)=>{
    return await Products.findByIdAndDelete(productId)
}
export {
    createProduct,
    getProducts,
    deleteById,
    upDatosById 
}