import { useState } from 'react';
import styles from '../css/Login.module.css';

const Login=({ setUser, setPass })=> {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            setError(true);
            return;
        }
        setError(false);
        setUser([username]);
        setPass([password]);



        localStorage.setItem('usuario', username)
        localStorage.setItem('password', password)

    };

    const handleReset = () => {
        setUserName("")
        setPassword("")
        setError(false)
    }

    return (
        <div className={styles.body}>
            <h1 className={styles.h1}>BOMY.CODE</h1>

            <main className={styles.main}>
                <form className={styles.form} id="formulario" onSubmit={handleSubmit}>
                    <h2 className={styles.h2}>LOGIN</h2>
                    <div className={styles.log1}>
                        <label className={styles.label} htmlFor="username">
                            UserName
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className={styles.log1}>
                        <label className={styles.label} htmlFor="password">
                            Password
                        </label>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.bot}>
                        <button className={styles.button} type="submit">
                            Login
                        </button>
                        <button className={styles.button} type="reset"
                            onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                    {error && <p className={styles.p}>Todos los campos son necesarios</p>}
                </form>
            </main>
        </div>
    );
}

export default Login;
