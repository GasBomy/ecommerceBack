import logo from '../images/logoProyecto2.png'
import styles from '../css/Header.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
/* import GuitarsElectrics from './GuitarsElectrics' */

const Header =()=>{
    const [menu, setMenu]= useState(false)
    const menuToggle =()=>{
        setMenu(!menu)
    }


    return(
        <div className={styles.body} >
            <nav className={styles.nav} >
                <span className={styles.menures}  onClick={menuToggle}>
                    <ion-icon name="menu-sharp"></ion-icon>
                </span>
                <span>
                    <Link to={'/Main'}><img src={logo} alt="logo" className={styles.img1} /></Link>
                </span>
                <div className={`${styles.productos} ${menu ? `${styles.isActive}` : '' }`}>
                    <span>
                        <Link to={'/Main'}><img src={logo} alt="logo" className={styles.img} /></Link>
                    </span>
                    <ul className={styles.lista}>
                        <li className={`${styles.electric} ${styles.li1}`}><a href="" >ELECTRIC</a>
                            <div className={styles.electricsub}>
                                <h3>ELECTRIC GUITARS</h3>
                                <ul>
                                    <li><Link to={'/Featured'}>Featured</Link></li>
                                    <li><Link>By Body Style</Link></li>
                                    <li><Link>By Collection</Link></li>
                                    <li><Link>Custom Shop</Link></li>
                                    <li><Link>Exclusive Colors</Link></li>
                                    <li><Link>Certified Vintage</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${styles.acustic} ${styles.li1}`}><a href="">ACOUSTIC</a>
                            <div className={styles.acusticsub}>
                                <h3>ACUSTICS GUITARS</h3>
                                <ul>
                                    <li><Link to={'/Featured2'}>Featured</Link></li>
                                    <li><Link>By Body Style</Link></li>
                                    <li><Link>By Collection</Link></li>
                                    <li><Link>Custom Shop</Link></li>
                                    <li><Link>Exclusive Colors</Link></li>
                                </ul>
                            </div>
                        </li>   
                        <li className={`${styles.bass} ${styles.li1}`}><a href="">BASS</a>
                            <div className={styles.basssub}>
                                <h3>BASS GUITARS</h3>
                                <ul>
                                    <li><Link to={'/ByBodyStyle'}>By Body Style</Link></li>
                                    <li><Link>By Collection</Link></li>
                                </ul>
                            </div>
                        </li>   
                        <li className={`${styles.guitarAccesories} ${styles.li1}`}><a href="">GUITAR ACCESSORIES</a>
                            <div className={styles.guiAceSub}>
                                <div>
                                    <h3>PARTS</h3>
                                    <ul>
                                        <li><Link>Bridges</Link></li>
                                        <li><Link>Covers</Link></li>
                                        <li><Link>Knobs</Link></li>
                                        <li><Link>Mounting</Link></li>
                                        <li><Link>Pickguards</Link></li>
                                        <li><Link>Pickups</Link></li>    
                                        <li><Link>Potentiometers</Link></li>
                                        <li><Link>Strap Buttons</Link></li>
                                        <li><Link>Switches</Link></li>
                                        <li><Link>Tailpieces</Link></li>
                                        <li><Link>Tuning Machines</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>ACCESORIES</h3>
                                    <ul>
                                        <li><Link>Cables</Link></li>
                                        <li><Link>Capos</Link></li>
                                        <li><Link>Cases</Link></li>
                                        <li><Link>Cleaning & Care</Link></li>
                                        <li><Link>Picks</Link></li>
                                        <li><Link>Soundhole Covers</Link></li>
                                        <li><Link> Stands</Link></li>
                                        <li><Link>Straps</Link></li>
                                        <li><Link>Tuners</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>STRINGS</h3>
                                    <ul>
                                        <li><Link>Electrics</Link></li>
                                        <li><Link>Acoustic</Link></li>
                                        <li><Link>Bass</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>   
                        <li className={`${styles.lifestyle} ${styles.li1}`}><a href="">LYFESTYLE</a>
                            <div className={styles.lifestylesub}>
                                <div>
                                    <h3>APPAREL</h3>
                                    <ul>
                                        <li><Link>Shirts & Tops</Link></li>
                                        <li><Link>Sweatshirts & Outerwear</Link></li>
                                        <li><Link>Artist Collection</Link></li>
                                        <li><Link>Collaborations</Link></li>
                                        <li><Link>Hats & Headwear</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>LIFESTYLE ACCESSORIES</h3>
                                    <ul>
                                        <li><Link>Keychains</Link></li>
                                        <li><Link>Phone Cases</Link></li>
                                        <li><Link>Pins, Patches & Stickers</Link></li>
                                        <li><Link>Lifton Leather Goods</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>HOME OFFICE</h3>
                                    <ul>
                                        <li><Link>Books</Link></li>
                                        <li><Link>Mini Guitars</Link></li>
                                        <li><Link>Collectibles</Link></li>
                                        <li><Link>Posters & Signage</Link></li>
                                        <li><Link>Seating & Stools</Link></li>
                                    </ul>
                                </div>
                            </div>    
                        </li>   
                        <li className={`${styles.service} ${styles.li1}`}><a href="">SERVICE</a>
                            <div className={styles.servicesub}>
                                <div>
                                    <h3>SERVICING TOOLS</h3>
                                    <ul>
                                        <li><Link>Warranty & Registration</Link></li>
                                        <li><Link>Virtual Guitar Tech</Link></li>
                                        <li><Link>Frequently Asked Questions</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>SHOPPING TOOLS</h3>
                                    <ul>
                                        <li><Link>Find Dealer Near You</Link></li>
                                        <li><Link>Online Retailers</Link></li>
                                        <li><Link>Shipping Policies</Link></li>
                                        <li><Link>Return Policies</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>SUPPORT TOOLS</h3>
                                    <ul>
                                        <li><Link>Serial Number Info</Link></li>
                                        <li><Link>Report Counterfeits</Link></li>
                                        <li><Link>Legacy Product Archive</Link></li>
                                        <li><Link>Contact Us</Link></li>
                                        <li><Link>About Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>   
                        <li className={`${styles.media} ${styles.li1}`}><a href="">MEDIA</a>
                            <div className={styles.mediasub}>
                                <h3>BOMY MEDIA</h3>
                                <ul>
                                    <li><Link>Bomy TV</Link></li>
                                    <li><Link>Records</Link></li>
                                    <li><Link>Books</Link></li>
                                    <li><Link>Bomy Blog</Link></li>
                                </ul>
                            </div>
                        </li> 
                        <li><Link to={'/AddProducts'}>ADD PRODUCTS</Link></li> 
                        <li><Link to={'/LoginUser'}>LOGIN-USER</Link></li>       
                        <li><Link to={'/Register'}>REGISTER</Link></li>       
                        <li><Link to={'/UserList'}>USERS-LIST</Link></li>       
                    </ul>
                </div>
                <span className={styles.carrito}>
                    <Link ><ion-icon name="cart-outline"></ion-icon></Link>
                </span>
            </nav>
            <div className={styles.separador}>

            </div>
        </div>
    )
}

export default Header