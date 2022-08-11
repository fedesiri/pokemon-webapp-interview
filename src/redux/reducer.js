import { ADD_COMBAT_POKEMON, GET_ALL_POKEMONS } from "./actions";

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
        case ADD_COMBAT_POKEMON:
            const pokemonToCombat = state.allPokemons.find(pokemon => pokemon.id === payload);
            return {
                ...state,
                combatPokemons: state.combatPokemons.concat(pokemonToCombat),
            };
        default:
            return {
                ...state,
            };
    }
}
