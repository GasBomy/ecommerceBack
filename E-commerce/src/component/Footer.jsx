import style from '../css/Footer.module.css'
import logo from '../images/logoProyecto2.png'

const Footer = () => {

    return (
        <div className={style.body}>
            <footer className={style.main} >
                <div className={style.redes}>
                    <a href='' >
                        <img className={style.logo2} src={logo} alt="logo de empresa" />
                    </a>
                    <div className={style.redes2}>
                        <p>Copyright ©2023.All Rights Reserved.</p>
                        <div className={style.redes3}>
                            <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href=""><ion-icon name="logo-youtube"></ion-icon></a>
                        </div>
                    </div>
                </div>

                <div className={style.services}>
                    <div className={style.boxUl}>
                        <h5>Section</h5>
                        <ul className={style.serviceUl} >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>

                    <div className={style.boxUl} >
                        <h5>Section</h5>
                        <ul className={style.serviceUl} >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>

                    <div className={style.boxUl}>
                        <h5>Section</h5>
                        <ul className={style.serviceUl}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li ><a href="#">About</a></li>
                        </ul>
                    </div>

                </div>


            </footer>
        </div>
    )
}
export default Footer;