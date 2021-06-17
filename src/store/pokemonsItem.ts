import {IStateRequest} from "../interface";
import {IInitialState} from "./index";
import {Dispatch} from "redux";
import req from "../utils/request";
import {IItemsRequest} from "../interface/pokemons";
import {configEndpoint} from "../config";
import {IPokemonsInitialState} from "./pokemons";

enum PokemonsActionTypes {
    FETCH_ITEMS = 'pokemonsItems/FETCH_ITEMS',
    FETCH_ITEMS_RESOLVE = 'pokemonsItems/FETCH_ITEMS_RESOLVE',
    FETCH_ITEMS_REJECT = 'pokemonsItems/FETCH_ITEMS_REJECT',
}

interface TypesAction {
    type: PokemonsActionTypes
    payload?: string[]
}
type ActionTypes = TypesAction

const initialState: IPokemonsInitialState = {
    items: {
        isLoading: false,
        data: null,
        error: null,
    },
}

const pokemonsItems = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_ITEMS:
            return {
                ...state,
                items: {
                    isLoading: true,
                    data: null,
                    error: null,
                },
            };
        case PokemonsActionTypes.FETCH_ITEMS_RESOLVE:
            return {
                ...state,
                items: {
                    isLoading: false,
                    data: action.payload,
                    error: null,
                },
            };
        case PokemonsActionTypes.FETCH_ITEMS_REJECT:
            return {
                ...state,
                items: {
                    isLoading: false,
                    data: null,
                    error: action.payload,
                },
            }
        default:
            return state
    }
}

export const getPokemonsItems = (state: IInitialState) => state && state.pokemons && state.pokemons.items && state.pokemons.items.data

export const getItemsAction = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: PokemonsActionTypes.FETCH_ITEMS });
        try {
            const response = await req<IItemsRequest>(configEndpoint.getPokemonsTypes, {});
            dispatch({
                type: PokemonsActionTypes.FETCH_ITEMS_RESOLVE,
                payload: response,
            });
        } catch (error) {
            dispatch({
                type: PokemonsActionTypes.FETCH_ITEMS_REJECT,
                payload: error,
            });
        }
    };
};

export default pokemonsItems