/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { IEpisodeProps } from '../../interface'

import { fetchData, toggleFavAction } from '../../context/Actions'
import { Store } from '../../context/Store'

const EpisodeList = React.lazy<any>(() => import('../Episodes/EpisodesList'))

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store)

    useEffect(() => {
        state.episodes.length === 0 && fetchData(dispatch)
    }, [])



    const props: IEpisodeProps = {
        episodes: state.episodes,
        toggleFavAction,
        store: { state, dispatch },
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
