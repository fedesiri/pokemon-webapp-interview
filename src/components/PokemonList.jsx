import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons } from "../redux/actions";

function PokemonList() {
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!allPokemons.length) {
            dispatch(getAllPokemons());
        }
    }, [allPokemons.length, dispatch]);
    return (
        <div>
            <h1>soy el componente PokemonList</h1>
        </div>
    );
}

export default PokemonList;
