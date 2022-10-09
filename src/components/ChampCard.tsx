import { Link } from 'react-router-dom';

import Champ from '../model/Champ';
import styles from '../styles/ChampCard.module.css';

interface ChampCardProps {
    champ: Champ
}

export default function ChampCard({ champ }: ChampCardProps) {
    return (
        <Link to='/build' state={{ champ: champ }}>
            <li className={styles.ListItem} key={champ.id}>
                <h2 className={styles.ItemName}>{champ.name}</h2>
                <div className={styles.ImageContainer}>
                    <img src={champ.image} alt={champ.name + ' Image'} />
                </div>
            </li>
        </Link>
    );
}