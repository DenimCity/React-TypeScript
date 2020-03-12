import React, { useContext } from 'react'


import { IEpisodeProps } from '../../interface'
import { Store } from '../../context/Store'
import { toggleFavAction } from '../../context/Actions'

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

export default function FavEpisode(): JSX.Element {
    const { state, dispatch } = useContext(Store)

    const props: IEpisodeProps = {
        episodes: state.favorites,
        store: { state, dispatch },
        toggleFavAction: toggleFavAction,
        favorites: state.favorites
    }

    return (
        <React.Suspense fallback={<div>...Loading</div>}>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    )
}
