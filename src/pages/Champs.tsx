import { useEffect, useState } from 'react';

import lolApiService from '../services/lolApiService';
import ChampObj from '../model/Champ';
import styles from '../styles/Champs.module.css';


export default function Champs() {
    const [champs, setChamps] = useState({} as ChampObj);

    useEffect(() => {
        const fetchChamps = async () => {
            const data = await lolApiService.getLolChampions()
            setChamps(data)
        }

        fetchChamps()
    }, []);

    return (
        <div className='page'>
            <h1 className={styles.Title}>Champions</h1>
            <ul className={styles.ChampList}>
                {Object.keys(champs).map((champ) => (
                    <li key={champs[champ].id}>
                        <h2>{champs[champ].name}</h2>
                        <div className={styles.ImageContainer}>
                            <img src={champs[champ].image} alt={champ + ' Image'} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}