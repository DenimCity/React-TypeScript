/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import './App.css';

import { Store } from './Store'
import { IEpisode, IAction } from './interface';

const EpisodeList = React.lazy<any>(() => import('./components/Episodes'))

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)
  console.log("state, dispatch", state.episodes)


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

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites
  }
  return (
    <Fragment >
      <header style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5vw', borderBottom: 'double #f65a5f', alignItems: 'center' }}>

        <div>
          <h1>Rick And Morty</h1>
          <p>Pick Youre Favorite episode</p>
        </div>

        <div>
          Favorite(s): {state.favorites.length}
        </div>
      </header>
      <React.Suspense fallback={'Loading'}>
        <section style={{ display: 'flex', flexWrap: "wrap" }}>
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </Fragment>
  );
}



