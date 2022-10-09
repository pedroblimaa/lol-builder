const getLolChampions = async () => {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json');
    const data = await response.json();
    const champs = data.data

    const imagesToFetch = Object.keys(champs).map((champ) => {
        return champs[champ].image.full;
    });

    const images = await Promise.all(imagesToFetch.map((image) => {
        return fetch(`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${image}`);
    }));

    Object.keys(champs).forEach((champ, index) => {
        champs[champ].image = images[index].url;
    });

    return champs;
}

const lolApiService = {
    getLolChampions: getLolChampions,
}

export default lolApiService;