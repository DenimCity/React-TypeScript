import React from 'react'
import { IState, IAction } from './interface'

const INITIAL_STATE: IState = {
    episodes: [],
    favorites: []
}

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        case 'ADD_FAV':
            return { ...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAV':
            return { ...state, favorites: action.payload }
        default:
            return state
    }
}
export const Store = React.createContext<IState | any>(INITIAL_STATE)


export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}