import {IStateRequest} from "../interface";

const initialState = {
    isLoading: false,
}

// const app = (state = initialState, action: ActionTypes) => {
//     switch (action.type) {
//         case PokemonsActionTypes.FETCH_TYPES:
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
//             return {
//                 ...state,
//                 isLoading: false,
//             };
//         case PokemonsActionTypes.FETCH_TYPES_REJECT:
//             return {
//                 ...state,
//                 isLoading: false,
//             };
//         default:
//             return state;
//     }
// }

// export default app