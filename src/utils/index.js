function formatTypes(types) {
    return types.map(({ type, slot }) => ({
        name: type.name,
        id: slot,
    }));
}

export function formatPokemon(pokemon) {
    return {
        id: pokemon.id,
        name: pokemon.name,
        stats: {
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            specialAttack: pokemon.stats[3].base_stat,
            specialDefense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
        },
        heigth: pokemon.height,
        primaryImage: pokemon.sprites.other.dream_world.front_default,
        secondaryImage: pokemon.sprites.other.home.front_default,
        types: formatTypes(pokemon.types),
    };
}

export function createPokemonIds() {
    const ids = [];
    for (let i = 1; i <= 151; i++) {
        ids.push(i);
    }
    return ids;
}

export function capitalizeLetter(string) {
    let stringMayus = string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
        stringMayus = stringMayus + string[i];
    }
    return stringMayus;
}

export function filterPokemons(pokemons, searchText) {
    return pokemons.filter(
        pokemon => pokemon.name.includes(searchText) || pokemon.id.toString() === searchText
    );
}
