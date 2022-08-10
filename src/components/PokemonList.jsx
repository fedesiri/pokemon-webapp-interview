import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import { Grid } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PokemonList({ searchText }) {
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const pokemonsPerPage = 18;
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (!allPokemons.length) {
            dispatch(getAllPokemons());
        }
    }, [allPokemons.length, dispatch]);

    return (
        <>
            <h1>{searchText}</h1>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
            >
                <Grid item container spacing={2} justifyContent="space-around" alignItems="center">
                    {allPokemons.slice(firstIndex, lastIndex).map(pokemon => (
                        <Grid item container justifyContent="center" xs={4} key={pokemon.id}>
                            <Grid item xs={10}>
                                <PokemonCard pokemon={pokemon} />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid item>
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(allPokemons.length / pokemonsPerPage)}
                            page={page}
                            onChange={handleChange}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default PokemonList;
