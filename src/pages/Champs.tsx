import { useState } from 'react';

import ChampObj from '../model/ChampsObj';
import ChampCard from '../components/ChampCard';
import styles from '../styles/Champs.module.css';

export default function Champs({ champs }: { champs: ChampObj }) {
    const [search, setSearch] = useState('');
    const [filteredChamps, setFilteredChamps] = useState(champs);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);

        const filteredNames = Object.keys(champs).filter((champ) => {
            return champ.toLowerCase().includes(searchValue)
        })

        const filteredChamps = filteredNames.reduce((acc: ChampObj, champ: string) => {
            acc[champ] = champs[champ]
            return acc;
        }, {})

        setFilteredChamps(filteredChamps);
    }



    return (
        <div className='page'>
            <h1 className={styles.Title}>Champions</h1>
            <input className={styles.Search} type='text' placeholder='Search...' onChange={(e) => handleSearch(e)} />
            <ul className={styles.ChampList}>
                {Object.keys(filteredChamps).map((champ) => (
                    <ChampCard key={filteredChamps[champ].id} champ={filteredChamps[champ]} />
                ))}
            </ul>
        </div>
    )
}