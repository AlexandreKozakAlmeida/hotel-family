import { Link } from 'react-router-dom';
import styles  from '../styles/Home.module.css';

export function Home() {
    return(
       <div className={styles.main}>
        <div className={styles.apresentation}>
            <h1>
                Bem vindo(a) ao Family Hotel!
            </h1>
            <p>
                Um hotel para toda a família.
            </p>
        </div>

        <button>
           <Link to='/services'>Entrar</Link>
        </button>
       </div>

    )
}



