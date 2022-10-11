const getLolChampions = async () => {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
    const data = await response.json()
    const champs = data.data
    const baseUrl = 'http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/'

    Object.keys(champs).forEach(champ => {
        champs[champ].image = baseUrl + champ + '.png'
    })

    return champs
}

const getChampInfo = async (champName) => {
    const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champName}.json`)
    const data = await response.json()
    const champ = data.data[champName]

    return champ
}

const lolApiService = {
    getLolChampions: getLolChampions,
    getChampInfo: getChampInfo
}

export default lolApiService