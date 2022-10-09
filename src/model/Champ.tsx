type Champ = {
    id: number;
    name: string;
    image: string;
}

type ChampObj = {
    [key: string]: Champ;
}

export default ChampObj;