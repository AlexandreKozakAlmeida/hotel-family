
import styles from '../../styles/ServicesHotel.module.css';
import { ServicesHotel } from "../ServicesHotel";
import room from '../../assets/roomService.jpg';
import hall from '../../assets/diningHall.jpg';
import bookRoom from '../../assets/bookRoom.jpg';
import  pool  from '../../assets/pool.jpg';
import games from '../../assets/games.jpg';
import { Footer } from '../Footer';

export function Services() {
    return (
        <div className={styles.services}>
           <ServicesHotel
                inverted={false}
                img={room}
                title={'Serviço de Quarto'}
                p1={`Nosso serviço de quarto é personalizado de acordo com cada cliente. Servimos o café da manhã em seu lugar particular caso prifira ficar em um ambiente mais reservado (também é possível servir o almoço e jantar dessa maneira).`}
                p2={'Também contamos com uma equipe de camareiras, assim o seu quarto sempre estará impecável.'} />

             <ServicesHotel
               id={'hallDiner'}
                inverted={true}
                img={hall}
                title={'Salão de Jantar'}
                p1={'Nossos salões de jantar contam com um espaço amplo para que todos se sintam confortáveis e tenham a melhor experiência possível. É um ótimo espaço social para que você possa aproveitar suas companhias enquanto desgruta de saborosas comidas'}
                p2={'Aqui é onde servimos almoço e jantar, porém ambos podem ser servido nos quartos se assim preferir.'}
             />   

             <ServicesHotel
               inverted={false}
               img={bookRoom}
               title={'Sala de literatura'}
               p1={'Se você gosta de ler então nossa sala de literatura é para você. Com uma vasta coleção de livros, nós atendemos o gosto literário de todos que procuram passar o tempo à sua maneira favorita.'}
               p2={'Um ambiente tranquilo para que você possa ler sem qualquer tipo de problemas.'}
             />

             <ServicesHotel
             inverted={true}
              img={pool}
              title={'Piscina'}
              p1={'Piscinas sociais para aproveitar bem os dias ensoladaros, interagir e conhecer pessoas novas'}
              p2={'Um ótimo espaço para quem gosta de tomar um ar e se refrescar.'}
             />

             <ServicesHotel
              inverted={false}
              img={games}
              title={'Sala de jogos'}
              p1={'Sala especial para a diversão para aqueles que gostam de jogar. Um espaço para diversão entre amigos e também com pessoas novas.'}
              p2={'Para aqueles que amam jogar, nós temos sistemas de campeonatos com premiações.'}
             />

             <Footer />


        </div>
    )
}