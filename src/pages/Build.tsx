import { useLocation } from 'react-router-dom';

import Champ from '../model/Champ';
import styles from '../styles/Build.module.css';

export default function Build() {
    const location = useLocation();
    const champ: Champ = location.state.champ;

    return (
        <div className="Build">
            <div className={styles.ChampHeader}>
                <img src={champ.image} alt={champ.name + ' Image'} />
                <h1>{champ.name}</h1>
            </div>
        </div>
    );
}
