/* import React from 'react' */
import {  useState, useEffect } from 'react'
import style from '../css/BassElectrics.module.css'
import axios from 'axios'


export const BassElectrics = () => {
    const [bajos, setBajos] = useState([])
    const categoria= 'bajo electrico'

    useEffect(()=>{
    const obtenerProductos= async ()=>{
        try{
            const productoObtenido = await axios.get(`http://localhost:9500/products/${categoria}`)
            setBajos(productoObtenido.data)
        }catch(err){
            console.error(`error al obtener el producto ${err}`)
        }
    }
        obtenerProductos()
    },[categoria])

/* useEffect(()=>{
    fetch(elements)
    .then(res => res.json())
    .then((data)=> console.log(setBajos(data)))
    .catch((err)=> console.log(err))
},[bajos])  */

return (
    <div className={style.body}>
        <h1 className={style.h1}>BASS ELECTRICS</h1>
        <section className={style.seccion}>
            {bajos.map((productos) => (
            <div key={productos._id} className={style.bajos}>
                <img src={productos.imagen} alt="bajo" />
                <p>{productos.nombre}</p>
                <p>{productos.model}</p>
                <p>$ {productos.precio} USD</p>
                <button>Comprar</button>
            </div>
        ))}
        </section>

    </div>
)
}
