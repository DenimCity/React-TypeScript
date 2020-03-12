/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import './App.css';

import { Store } from './Store'
import { IEpisode, IAction } from './interface';



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
  return (
    <Fragment >
      <section style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5vw', borderBottom: 'double #f65a5f' }}>
        <h1>Rick And Morty</h1>
        <p>Pick Youre Favorite episode</p>
      </section>
      <section style={{ display: 'flex', flexWrap: "wrap" }}>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section style={{ margin: '5px 24px' }} key={episode.id}>
              <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
              <button type="button" onClick={() => toggleFavAction(episode)}>
                {state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'UnFav' : 'FAV'}

              </button>
            </section>
          )
        })}
      </section>
    </Fragment>
  );
}



