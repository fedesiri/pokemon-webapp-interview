const initialState = {
    allPokemons: [],
    combatPokemons: [],
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        default:
            return {
                ...state,
            };
    }
}
