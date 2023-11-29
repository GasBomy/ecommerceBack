import style from '../css/Carusell.module.css'
import { useState, useEffect } from 'react'
import React from 'react';

const Carusell =( {imagenes} )=>{

const [imagenActual, setImagenActual]= useState(0);
const cantidad = imagenes?.length

if(!Array.isArray(imagenes) || cantidad === 0) 
return;


const handleLeftClick = () => {
    setImagenActual((prevImagen) => (prevImagen === 0 ? cantidad - 1 : prevImagen - 1));
  };

  const handleRightClick = () => {
    setImagenActual((prevImagen) => (prevImagen === cantidad - 1 ? 0 : prevImagen + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleRightClick, 5000);
    return () => clearInterval(interval); 
  }, [imagenActual]);

  return (
    <div className={style.body}>
      <button className={style.but} onClick={handleLeftClick}><ion-icon name="chevron-back-outline"></ion-icon></button>
      {imagenes.map((imagen, index) => (
        <div className={style.contenedorImagen} key={index} style={{ display: imagenActual === index ? 'block' : 'none' }}>
          <img className={style.img} src={imagen} alt="imagenes" />
        </div>
      ))}
      <button className={style.but} onClick={handleRightClick}><ion-icon name="chevron-forward-outline"></ion-icon></button>
    </div>
  );
};
export default Carusell;