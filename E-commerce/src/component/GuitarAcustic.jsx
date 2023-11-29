/* import React from 'react' */
import { useEffect, useState } from 'react'
import style from '../css/GuitarAcustic.module.css'
import axios from 'axios'

export const GuitarAcustic = () => {
    const [acustica, setAcustica]= useState([])
    const categoria = 'guitarra acustica'

    useEffect(()=>{
        const obtenerProductos= async ()=>{
            try{
                const productoObtenido= await axios.get(`http://localhost:9500/products/${categoria}`)
                setAcustica(productoObtenido.data)
            }catch(err){
                console.log(`error al obtener el producto ${err}`)
            }
        }
        obtenerProductos()
    },[categoria])



    return (
    <div className={style.body}>
        <h1 className={style.h1}>GUITARS ACUSTICS</h1>
        <section className={style.seccion}>
            {acustica.map((productos) => (
            <div key={productos._id} className={style.acustic}>
                <img src={productos.imagen} alt="acustic guitarra" />
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
