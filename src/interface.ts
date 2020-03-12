
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

export interface IEpisodeProps {
    episodes: IEpisode[]
    store: { state: IState, dispatch: Dispatch }
    toggleFavAction: (state: IState, dispath: Dispatch, episode: IEpisode) => IAction
    favorites: IEpisode[]
}

export type Dispatch = React.Dispatch<IAction>