import styles from '../styles/Footer.module.css';
import { TfiEmail } from 'react-icons/tfi'; 
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';

export function Footer() {
    return(
        <div className={styles.footer}>
           <div className={styles.header}>
            <h3>
                Contatos
            </h3>
            <hr />
           </div>
            <ul>
                <li>
                 <TfiEmail />   familyhotel@gmail.com
                </li>
                <li>
                <TfiEmail /> familyhotelreception@hotmail.com
                </li>
                <li>
                  <BsTelephone />  3000-0000
                </li>
                <li>
                 <BsWhatsapp />   (45) 9999-0000
                </li>
                <li>
                  <BsWhatsapp /> (45) 9888-1111
                </li>
            </ul>
        </div>
    )
}