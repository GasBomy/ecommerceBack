import { useEffect, useState } from 'react'
import style from '../css/Register.module.css'
import axios from 'axios'

const Register = () => {

    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async  (e) => {
        e.preventDefault()

        console.log(nombre)
        console.log(email)
        console.log(password)

        try {
            const subirDatos = await  axios.post('http://localhost:9500/user/register',
            {
                nombre,
                email,
                password
            })
            console.log('respuesta: ', subirDatos.data)
            console.log()
            setNombre('')
            setEmail('')
            setPassword('')
        } catch (err) {
            console.error('Error interno en el servidor al registrar usuario')
        }

    }







    return (
        <div className={style.body}>
            {/*  <video src="../images/pantera.mp4" autoPlay loop className={style.video}></video> */}
            <div className={style.contenido}>
                <div className={style.contenedorform}>
                    <div className={style.contenedorTitulo}>
                        <h1 className={style.logo}>REGISTER</h1>
                    </div>
                    <form /* action="/user/create" */ className={style.empa} /* method="post" */ onSubmit={handleSubmit}>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="person-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input className={style.input} type="text"
                                name="nombre"
                                placeholder="Nombre"
                                id="nombre"
                                onChange={(e)=>setNombre(e.target.value)}
                                required />
                            <label htmlFor="nombre"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="mail-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input className={style.input} type="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                required />
                            <label htmlFor="email"></label>
                        </div>
                        <div className={style.pame}>
                            <span className={style.icon}>
                                <ion-icon name="lock-closed-outline" className={style.ionicon}></ion-icon>
                            </span>
                            <input className={style.input} type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                required />
                            <label htmlFor="password"></label>
                        </div>

                        <div className={style.botones}>
                            <button type='submit' className={style.button}>Register</button>
                            {/* <button type="reset" className={style.button}>Reset</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register