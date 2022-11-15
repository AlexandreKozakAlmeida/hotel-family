import styles from '../../styles/Prices.module.css'
import family from '../../assets/familyRoom.jpg';
import solo from '../../assets/soloRoom.jpg';
import { Rooms } from '../Rooms';
import { Budget } from '../Budget';
import { Footer } from '../Footer';

export function Prices() {
    return (
       <div className={styles.rooms}>
        <header>
            <h2>
                Quartos
            </h2>
            <p>
                Nossos quartos possuem o espaço ideal para cada tamanho de família.
                <br/> Oferecemos o maior conforto para uma melhor estadia.
            </p>
            <p>
                Verifique o quarto desejado e preencha os campos no final da página para saber o preço.
            </p>
        </header>
        <div className={styles.roomInformation}>
          <Rooms
            inverted={false}
            img={family}
            imgDesc={'Quarto grande com camas.'}
            title={'Quarto para família'}
            p1={'Os nossos quartos para famílias dispõem de uma cama de casal e camas de solteiro.'}
            p2={'A quantidade de camas de solteiro é adaptável para cada tamanho de família. Para informar a quantidade de camas necessárias em seu quarto, navegue até o final da página e preencha as informações. Caso esteja com amigos, pode-se colocar somente a quantidade de camas de solteiro que desejam.'}
          />

        <Rooms
        inverted={true}
            img={solo}
            imgDesc={'Quarto de solteiro com uma cama.'}
            title={'Quarto para solteiro'}
            p1={'Os nossos quartos para solteiros dispõem de uma cama aconchegante para sua melhor estadia.'}
            p2={'Também dispõe de várias opções apra que você passe o tempo da maneira que mais te agrade.'}
          />

          </div>
           <Budget />

           <Footer />
        </div>
     
        
    )
}