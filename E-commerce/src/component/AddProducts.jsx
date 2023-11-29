/* import React from 'react' */
import { useState } from 'react'
import style from '../css/AddProducts.module.css'
import axios from 'axios'



function AddProducts() {

    const [nombre, setNombre]= useState('')
    const [imagen, setImagen]= useState('')
    const [codigo, setCodigo]= useState('')
    const [existencia, setExistencia]= useState('')
    const [precio, setPrecio]= useState('')
    const [categoria, setCategoria]= useState('')
    const [descripcion, setDescripcion]= useState('')

    const handleSubmit= async(e)=>{
        e.preventDefault()

/*         console.log(`${nombre}`)
        console.log(`${imagen}`)
        console.log(`${codigo}`)
        console.log(`${existencia}`)
        console.log(`${precio}`)
        console.log(`${categoria}`)
        console.log(`${descripcion}`) */

        try{
            const enviarDatos = await axios.post('http://localhost:9500/products/updateProduct',{
                nombre,
                precio,
                categoria,
                imagen,
                codigo,
                existencia,
                descripcion
            })

            console.log('respuesta: ', enviarDatos.data)

        setNombre('')
        setCategoria('')
        setCodigo('')
        setPrecio('')
        setExistencia('')
        setDescripcion('')
        setImagen('')

        }catch(err){
            console.error(err)
        }
    }
    

    return (
        <div className={style.body}>
            <div className={style.contenido}>
                <h1 className={style.logo}>ADD PRODUCTS</h1>
                <div className={style.contenedorform}>
                    <form /* action="/user/products" */ className={style.empa} /* method="post" */ onSubmit={handleSubmit} >
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="albums-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input type='text'
                                name="nombre" 
                                placeholder="Nombre del Producto" 
                                id="nombre" 
                                required
                                value={nombre}
                                onChange={(e)=>setNombre(e.target.value)}/>
                                
                            <label htmlFor="nombre"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="images-outline" className={style.ionicon} ></ion-icon>
                            </span>
                            <input type="text"
                                name="imagen"
                                placeholder="Imagen"
                                id="imagen"
                                value={imagen}
                                onChange={(e)=>setImagen(e.target.value)}
                                required/>
                            <label htmlFor="imagen"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="pricetags-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input type="number"
                                name="codigo"
                                placeholder="Codigo de Barras"
                                id="codigo"
                                value={codigo}
                                onChange={(e)=>setCodigo(e.target.value)}
                                required/>
                                <label htmlFor="codigo"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="pricetags-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input type="number"
                                name="existencia"
                                placeholder="Existencia Actual"
                                id="existencia"
                                value={existencia}
                                onChange={(e)=>setExistencia(e.target.value)}
                                required/>
                                <label htmlFor="existencia"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="pricetags-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input type="number"
                                name="precio"
                                placeholder="Precio"
                                id="precio"
                                value={precio}
                                onChange={(e)=>setPrecio(e.target.value)}
                                required/>
                                <label htmlFor="precio"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="pricetags-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input type="text"
                                name="categoria"
                                placeholder="Categoria"
                                id="categoria"
                                value={categoria}
                                onChange={(e)=>setCategoria(e.target.value)}
                                required/>
                                <label htmlFor="categoria"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="pricetags-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <textarea type="text"
                                name="descripcion"
                                placeholder="Descripcion"
                                id="descripcion"
                                value={descripcion}
                                onChange={(e)=>setDescripcion(e.target.value)}
                                required/>
                        </div>

                        <div className={style.botones}>
                            <button type='submit' className={style.botGreen}>Guardar</button>
                            <button className={style.botYellow}type="reset">Ver Todos</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProducts