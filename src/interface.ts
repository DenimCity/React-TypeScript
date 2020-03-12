
export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
}


export interface IState {
    episodes: Array<IEpisode>
    favorites: Array<IEpisode>
}

export interface IAction {
    type: string
    payload: any
}