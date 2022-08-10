import { fetchPokemonsFromApi } from "../service/fetchPokemonsFromApi";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export function getAllPokemons() {
    return async function (dispatch) {
        const pokemonsFromApi = await fetchPokemonsFromApi();
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: pokemonsFromApi,
        });
    };
}
