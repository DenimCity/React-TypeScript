import React from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store';

export default function Header() {
    const { state } = React.useContext(Store)
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5vw', borderBottom: 'double #f65a5f', alignItems: 'center' }}>
            <div>
                <h1>Rick And Morty</h1>
                <p>Pick Youre Favorite episode</p>
            </div>
            <div>
                <a href="/">Home</a>
                <a href="/favs"> Favorite(s): {state.favorites.length}</a>
            </div>
        </header>
    )
}
