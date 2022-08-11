import { fetchPokemonsFromApi } from "../service/fetchPokemonsFromApi";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const ADD_COMBAT_POKEMON = "ADD_COMBAT_POKEMON";

export function getAllPokemons() {
    return async function (dispatch) {
        const pokemonsFromApi = await fetchPokemonsFromApi();
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: pokemonsFromApi,
        });
    };
}

export function addCombatPokemon(id) {
    return {
        type: ADD_COMBAT_POKEMON,
        payload: id,
    };
}
