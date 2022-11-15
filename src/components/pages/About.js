import React from 'react'

import styles from '../../styles/About.module.css'
import  hotel  from '../../assets/hotel.png';

export function About() {
    return (
       <div className={styles.aboutUsContainer}>
         
         <img src={hotel} alt="hotel" />
        <div className={styles.aboutText}>
                     
            <h3>
                O início
            </h3>
            <p>
               Tudo começou a 20 anos atrás, uma familia tinha uma pequena e aconchegando casa perto de uma rodovia. Nessa casa eram acolhidos todos os viajantes cançados que não tinham onde passar a noite e não tinham dinheiro para pagar algum lugar para ficar, mas mesmo sem cobrar nada pela hospedagem as pessoas faziam suas ofertas para o funcionamento da casa. Com o passar do tempo oferecer estadia virou algo rotineiro, não havia um dia sequer que a casa ficava sem receber novas visitas, com isso a família decidiu juntar suas economias para formar um pequeno hotel.
            </p>

            <h3>
                Evolução
            </h3>

            <p>
                Com o dinheiro juntado foi possível expandir o negócio, foi possível aumentar a casa e criar cada vez mais quartos. Tudo foi reformado, a sala, banheiros, sala de jantar, e tudo mais que era possível. Ao passar dos anos o pequeno hotel foi ficando mais e mais popular. Alguns anos mais tarde não foi possível mais expandir o hotel por conta do tamanho do terreno em que se encontrava, com isso veio um novo desafio, fazer algo incrivelmente maior.
            </p>

            <h3>
                Dias atuais
            </h3>

            <p>
                Hoje temos o hotel dos nossos sonhos, um enorme hotel para que seja possível receber todas as famílias que quiserem vir.
            </p>
        </div>
      </div>
         
      
    )
}