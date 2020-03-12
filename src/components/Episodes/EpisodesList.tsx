import React from 'react';
import { IEpisode } from '../../interface';


export default function EpisodesList(props: any): JSX.Element[] {
    const { episodes, toggleFavAction, favorites, store } = props
    const { state, dispatch } = store
    return episodes.map((episode: IEpisode) => {
        return (
            <section style={{ margin: '5px 24px' }} key={episode.id}>
                <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
                <div>{episode.name}</div>
                <section>
                    Season: {episode.season} Number: {episode.number}
                </section>
                <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                    {favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'UnFav' : 'FAV'}
                </button>
            </section>
        )
    })
}





