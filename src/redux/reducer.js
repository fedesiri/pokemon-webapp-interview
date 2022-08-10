import { GET_ALL_POKEMONS } from "./actions";

const initialState = {
    allPokemons: [],
    combatPokemons: [],
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
            };
        default:
            return {
                ...state,
            };
    }
}
