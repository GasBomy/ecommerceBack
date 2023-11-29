

import style from '../css/GuitarsElectrics.module.css';
import { useState, useEffect } from 'react';
/* import elements from '../GuitarsElec.json' */
import axios from 'axios'
const GuitarsElectrics = () => {

/* const [guitarra, setGuitarra]= useState([]) */

/* useEffect(()=>{
  fetch(elements)
.then((res)=> res.json())
.then((data)=> setGuitarra(data))
.catch((error)=> console.log(error))
console.log()
},[guitarra])
 */
/* elements.forEach(element => {
  console.log(element.name)
}); */
const [producto, setProducto]= useState([])
const categoria= 'guitarra electrica'

useEffect(()=>{
  const obtenerProductos= async ()=>{
    try{
      const productoObtenido = await axios.get(`http://localhost:9500/products/${categoria}`)
      setProducto(productoObtenido.data)
    }catch(err){
      console.error(`error al obtener el producto ${err}`)
    }
  }
  obtenerProductos()
},[categoria])

  return (
    <div className={style.body}>
      <h1 className={style.h1}>GUITARS ELECTRICS</h1>
      <section className={style.seccion}>
        {producto.map((productos) => (
          <div key={productos._id} className={style.guitarras}>
            <img src={productos.imagen} alt="guitarra" />
            <p>{productos.nombre}</p>
            {/* <p>{producto.model}</p> */}
            <p>$ {productos.precio} USD</p>
            <button>Comprar</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GuitarsElectrics;
