import { IState, IEpisode, IAction } from '../interface';
import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './actionTypes'

export const fetchData = async (dispatch: any) => {
    try {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
        const data = await fetch(URL)
        const dataJson = await data.json()

        return dispatch({
            type: FETCH_DATA,
            payload: dataJson._embedded.episodes
        })

    } catch (error) {
        /**
         * Create An Error State
         * If Error Dispatch *something*
         */
    }
}

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
    const episodeInFave = state.favorites.includes(episode)
    let dispatchObj = {
        type: ADD_FAV,
        payload: episode
    }
    if (episodeInFave) {
        const favoritesWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id)
        dispatchObj = {
            type: REMOVE_FAV,
            payload: favoritesWithoutEpisode
        }
    }
    return dispatch(dispatchObj)
}