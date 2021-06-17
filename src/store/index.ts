import {combineReducers} from "redux";
import pokemons, {IPokemonsInitialState } from "./pokemons";
// import pokemonsItems from "./pokemonsItem";

export interface IInitialState {
    pokemons: IPokemonsInitialState,
}

const createRootReducer = () =>
    combineReducers({
        // app,
        // pokemonsItems,
        pokemons,
    })


export default createRootReducer