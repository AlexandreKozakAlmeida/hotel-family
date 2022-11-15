import styles from '../styles/Rooms.module.css';

export function Rooms({inverted , img, imgDesc, title, p1, p2}) {
    return (
        <div className={ inverted ? styles.roomsContainerInverted : styles.roomsContainer }>
            <img src={img} alt={imgDesc} />

            <div className={styles.roomsText}>
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