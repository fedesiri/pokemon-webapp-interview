import { ADD_COMBAT_POKEMON, GET_ALL_POKEMONS, REMOVE_COMBAT_POKEMON } from "./actions";

const initialState = {
    allPokemons: [],
    combatPokemons: [],
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_POKEMONS:
            let combatPokemons = localStorage.getItem("pokemons");
            combatPokemons = JSON.parse(combatPokemons) || [];
            return {
                ...state,
                allPokemons: payload,
                combatPokemons,
            };
        case ADD_COMBAT_POKEMON:
            const pokemonToCombat = state.allPokemons.find(pokemon => pokemon.id === payload);

            let pokemonsInStorage = localStorage.getItem("pokemons");
            if (pokemonsInStorage) {
                pokemonsInStorage = JSON.parse(pokemonsInStorage);
                pokemonsInStorage.push(pokemonToCombat);
                localStorage.setItem("pokemons", JSON.stringify(pokemonsInStorage));
            } else {
                localStorage.setItem("pokemons", JSON.stringify([pokemonToCombat]));
            }
            return {
                ...state,
                combatPokemons: state.combatPokemons.concat(pokemonToCombat),
            };
        case REMOVE_COMBAT_POKEMON:
            let pokemonsInStorageToDelete = localStorage.getItem("pokemons");
            pokemonsInStorageToDelete = JSON.parse(pokemonsInStorageToDelete);
            pokemonsInStorageToDelete = pokemonsInStorageToDelete.filter(
                pokemon => pokemon.id !== payload
            );
            localStorage.setItem("pokemons", JSON.stringify(pokemonsInStorageToDelete));
            return {
                ...state,
                combatPokemons: state.combatPokemons.filter(pokemon => pokemon.id !== payload),
            };
        default:
            return {
                ...state,
            };
    }
}
