import { formatPokemon, createPokemonIds } from "../utils";
import axios from "axios";

export async function fetchPokemonsFromApi() {
    const ids = createPokemonIds();
    const promises = ids.map(async id => {
        const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
        return formatPokemon(pokemon.data);
    });
    return await Promise.all(promises);
}
