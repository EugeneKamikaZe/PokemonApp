import {PokemonsActionTypes} from "./pokemons";

const initialState = {
    isLoading: false,
}

const app = (state = initialState, action: any) => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_TYPES:
            return {
                ...state,
                isLoading: true,
            };
        case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
            return {
                ...state,
                isLoading: false,
            };
        case PokemonsActionTypes.FETCH_TYPES_REJECT:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}

export default app