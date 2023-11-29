import { Link } from 'react-router-dom'
import style from '../css/UserList.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UsersList = () => {
    const [persons, setPersons] = useState([])


    const showUsers = async () => {
            const { data } = await axios.get('http://localhost:9500/user/list')
            setPersons(data.Users)
            /* console.log(data.Users) */
    }

    useEffect(()=>{
        showUsers() 
    },[])

    const deleteUser= async(id)=>{
        const deleteById = await axios.delete(`http://localhost:9500/user/delete/${id}`)
        console.log(deleteById)
        showUsers()
    }




    return (
        <div className={style.body}>
            <main className={style.principal}>
                <h1 className={style.h1}>Lista de Usuarios</h1>
                <section className={style.seccion}>
                    <table className={style.tabla}>
                        <thead className={style.thead}>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                {/* <th>PASSWORD</th> */}
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className={style.tbody}>
                            {persons.map((person)=> 
                                <tr key={person._id}>
                                    <td>{person.nombre}</td>
                                    <td>{person.email}</td>
                                    {/* <td>{person.password}</td> */}
                                    <td className={style.contenedorButon}>
                                        <Link href="" className={style.buttonBlue}><ion-icon name="create-outline" size='large' className={style.ionicon}></ion-icon></Link>
                                        <button className={style.buttonRed} onClick={()=>deleteUser(person._id)}><ion-icon name="trash-outline" size='large'  className={style.ionicon}></ion-icon></button>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}

export default UsersList