import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import { Grid } from "@mui/material";

function PokemonList() {
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    console.log(allPokemons);
    useEffect(() => {
        if (!allPokemons.length) {
            dispatch(getAllPokemons());
        }
    }, [allPokemons.length, dispatch]);

    return (
        <>
            <Grid container spacing={2} justifyContent="space-around" alignItems="center">
                {allPokemons.map(pokemon => (
                    <Grid item container justifyContent="center" xs={4} key={pokemon.id}>
                        <Grid item xs={10}>
                            <PokemonCard pokemon={pokemon} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default PokemonList;
