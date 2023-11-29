
import styles from '../css/Cards.module.css'
import bajo from '../images/bajoproyectoo.png'
import electrica from '../images/guitarraproyecto.png'
import acustica from '../images/acusticaproyecto.png'
import accesorios from '../images/microfonosproyecto.png'

const Cards =( )=>{


    return( 
        <div className={styles.body}>
            <section className={styles.garanty}>
                <div className={styles.contenedorInfo}>
                    <span className={styles.icon}><ion-icon name="cube-outline"></ion-icon></span>
                    <h2 className={styles.h2}>FREE SHIPPING</h2>
                    <p className={styles.p}>On US online orders over $50.</p>
                </div>
                <div className={styles.contenedorInfo}>
                    <span className={styles.icon}><ion-icon name="shield-checkmark-outline"></ion-icon></span>
                    <h2 className={styles.h2}>LIFETIME WARRANTY</h2>
                    <p className={styles.p}>Free, limited warranty on material and workmanship.</p>
                </div>
                <div className={styles.contenedorInfo}>
                    <span className={styles.icon}><ion-icon name="cash-outline"></ion-icon></span>
                    <h2 className={styles.h2}>FINANCING AVAILABLE</h2>
                    <p className={styles.p}>Options available through Klarna at checkout.</p>
                </div>
            </section>
            <div className={styles.titulo}><h2>PRODUCTS</h2></div>
            <section className={styles.productos}>
                <div className={styles.cardPadre}>
                    <div className={styles.card}>
                        <div className={styles.cardFront}>
                            <div className={styles.bg}></div>
                            <div className={styles.instrumentos}>
                                <img className={styles.imgIns} src={electrica} alt="guitarra" />
                            </div>
                        </div>
                        <div className={styles.cardBack}>
                            <div className={styles.backContent}>
                                <p>GUITARRAS ELECTRICAS</p>
                                <button>VER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardPadre}>
                    <div className={styles.card}>
                        <div className={`${styles.cardFront} ${styles.imgA}`}>
                            <div className={styles.bg}></div>
                            <div className={styles.instrumentos}>
                                <img className={styles.imgIns} src={bajo} alt="bajo" />
                            </div>
                        </div>
                        <div className={styles.cardBack}>
                            <div className={styles.backContent}>
                                <p>BAJOS ELECTRICAS</p>
                                <button>VER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardPadre}>
                    <div className={styles.card}>
                        <div className={`${styles.cardFront} ${styles.imgB}`}>
                            <div className={styles.bg}></div>
                            <div className={styles.instrumentos}>
                                <img className={styles.imgIns} src={acustica} alt="guitarra acustica" />
                            </div>
                        </div>
                        <div className={styles.cardBack}>
                            <div className={styles.backContent}>
                                <p>GUITARRAS ACUSTICAS</p>
                                <button>VER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardPadre}>
                    <div className={styles.card}>
                        <div className={`${styles.cardFront} ${styles.imgC}`}>
                            <div className={styles.bg}></div>
                            <div className={styles.instrumentos}>
                                <img className={styles.mic} src={accesorios} alt="accesorios para guitarras" />
                            </div>
                        </div>
                        <div className={styles.cardBack}>
                            <div className={styles.backContent}>
                                <p>ACCESORIOS DE GUITARRAS Y BAJOS</p>
                                <button>VER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Cards;