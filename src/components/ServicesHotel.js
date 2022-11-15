import styles from '../styles/ServicesHotel.module.css';

export function ServicesHotel({id, inverted, img,imgDescription,title, p1, p2}) {
    return (
        <div id={id} className={ inverted ? styles.servicesContainerInvert : styles.servicesContainer}>
            <img src={img} alt={imgDescription} />
       
           <div className={styles.text}>
                <h3>
                   {title}
                </h3>
                <p>
                    {p1}
                </p>
                <p>
                    {p2}
                </p>
           </div>
        </div>
    )
}