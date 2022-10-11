import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Champ from '../model/Champ'
import styles from '../styles/Build.module.css'
import lolApiService from '../services/lolApiService'

export default function Build() {
    const location = useLocation()
    const champ: Champ = location.state.champ
    const [champInfo, setChampInfo] = useState({} as any)

    useEffect(() => {
        const getChampInfo = async () => {
            const baseSpellImageUrl = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/'
            const res = await lolApiService.getChampInfo(champ.name)

            const spellImages = res.spells.map((spell: any) => {
                return baseSpellImageUrl + spell.image.full
            })

            console.log(spellImages)

            const info = {
                spells: spellImages,
            }

            setChampInfo(info)
        }

        getChampInfo()
    }, [])

    return (
        <div className="Build">
            <div className={styles.ChampHeader}>
                <img className={styles.ChampImage} src={champ.image} alt={champ.name + ' Image'} />
                <div>
                    <h1>{champ.name}</h1>
                    {champInfo.spells && champInfo.spells.map((spell: any) => {
                        return <img className={styles.SkillImage} key={spell} src={spell} alt={spell} />
                    })}
                </div>

            </div>
        </div>
    )
}
