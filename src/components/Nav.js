import  styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';


export function Nav({active, activateMenu, closeMenu}) {

    return (
        <div id='nav' className={ active ? styles.navActive : styles.nav }>
            <nav className={ styles.navegation }>
                    <p className={ styles.logo }>
                       <Link to='/'>Hotel</Link>
                    </p>
                <ul>
                   <button className={styles.closeMenuMobile} onClick={closeMenu}  >X</button>
                   
                    <li onClick={closeMenu}  className={styles.about}>
                         <Link to='./about'>Sobre Nós</Link>
                    </li>
                                  
                    <li onClick={closeMenu}  className={styles.services}>
                      <Link to='./services'>Serviços</Link>
                    </li>
                  
                    <li onClick={closeMenu}  className={styles.price}>
                       <Link to='price'>Quartos</Link>
                    </li>
                </ul>
                <p  onClick={activateMenu} className={styles.mobileMenu}>
                    Menu 
                </p>
            </nav>
        </div>
    )
}