/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { IEpisode, IAction, IEpisodeProps } from './interface'
import { Store } from './Store'

const EpisodeList = React.lazy<any>(() => import('./components/Episodes'))

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store)

    useEffect(() => {
        state.episodes.length === 0 && fetchData()
    }, [])

    const fetchData = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
        const data = await fetch(URL)
        const dataJson = await data.json()
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJson._embedded.episodes

        })
    }

    const toggleFavAction = (episode: IEpisode): IAction => {
        const episodeInFave = state.favorites.includes(episode)
        let dispatchObj = {
            "type": 'ADD_FAV',
            "payload": episode
        }
        if (episodeInFave) {
            const favoritesWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id)
            dispatchObj = {
                "type": 'REMOVE_FAV',
                "payload": favoritesWithoutEpisode
            }
        }
        return dispatch(dispatchObj)
    }

    const props: IEpisodeProps = {
        episodes: state.episodes,
        toggleFavAction,
        favorites: state.favorites
    }
    return (
        <React.Suspense fallback={'Loading'}>
            <section style={{ display: 'flex', flexWrap: "wrap" }}>
                <EpisodeList {...props} />
            </section>
        </React.Suspense>
    )
}
