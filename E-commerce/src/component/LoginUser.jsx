import style from '../css/LoginUser.module.css'
/* import axios from 'axios' */
import { useState} from 'react'

const LoginUser = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    
/*     const logueoSubmit = async(e)=>{
        e.preventDefault()

        console.log(email)
        console.log(password)

        try{
            const logueo = await axios.post('http://localhost:9500/user/login',{
                email,
                password
            })
            console.log(logueo)

            setEmail('')
            setPassword('')
        }catch(err){
            console.error('usuario no registrado')
        } */

        const logueoSubmit =(e)=>{
            e.preventDefault()

                const response = fetch('http://localhost:9500/user/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                  });
        }



    





    return (
        <div className={style.body}>
            <main className={style.principal}>
                <div className={style.contenido}>
                    <h1 className={style.logo}>LOGIN</h1>
                    <div className={style.contenedorform}>
                        <form /* action="/user/login"  */className={style.empa} /* method="post" */>
                            <div className={style.pame}>
                                <span className={style.icon}>
                                    <ion-icon name="mail-outline"></ion-icon>
                                </span>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required/>
                                    <label htmlFor="email"></label>
                            </div>
                            <div  className={style.pame}>
                                <span className={style.icon}>
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </span>
                                <input type="password"
                                    name="password"
                                    placeholder="Password"
                                    id="password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required/>
                                    <label htmlFor="password"></label>
                            </div>

                            <div className={style.botones}>
                                <button className={style.button} onClick={logueoSubmit} >Login</button>
                                <button type="reset" className={style.button}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default LoginUser