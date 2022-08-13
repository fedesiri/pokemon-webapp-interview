import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import { Grid, Typography } from "@mui/material";
import { filterPokemons } from "../utils";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PokemonList({ searchText }) {
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const pokemonsPerPage = 18;
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const numberOfPages = Math.ceil(
            filterPokemons(allPokemons, searchText).length / pokemonsPerPage
        );

        if (!allPokemons.length) {
            dispatch(getAllPokemons());
        }
        if (page > numberOfPages) {
            setPage(1);
        }
    }, [allPokemons.length, allPokemons, searchText, dispatch, page]);

    function getSearchWording() {
        const isNumber = !isNaN(parseInt(searchText));
        const noResults = !filterPokemons(allPokemons, searchText).length;
        if (!isNumber) {
            return noResults ? (
                <span>
                    No se encontraron resultados para <i>"{searchText}"</i>
                </span>
            ) : (
                <span>
                    Estás buscando a <i>"{searchText}"</i>
                </span>
            );
        } else {
            return noResults ? (
                <span>
                    No se encontró el pokemon con el id <i>"{searchText}"</i>
                </span>
            ) : (
                <span>
                    Estás buscando al pokemon con id <i>"{searchText}"</i>
                </span>
            );
        }
    }

    return (
        <>
            <Grid
                container
                direction="column"
                alignItems="stretcht"
                justifyContent="center"
                spacing={2}
            >
                {searchText ? (
                    <Grid item xs={12} style={{ marginLeft: "15px" }}>
                        <Typography variant="h5">{getSearchWording()}</Typography>
                    </Grid>
                ) : null}

                <Grid item container spacing={2} justifyContent="space-around" alignItems="center">
                    {filterPokemons(allPokemons, searchText)
                        .slice(firstIndex, lastIndex)
                        .map(pokemon => (
                            <Grid item container justifyContent="center" xs={4} key={pokemon.id}>
                                <Grid item xs={10}>
                                    <PokemonCard pokemon={pokemon} />
                                </Grid>
                            </Grid>
                        ))}
                </Grid>
                <Grid item container justifyContent="center">
                    <Grid item>
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil(
                                    filterPokemons(allPokemons, searchText).length / pokemonsPerPage
                                )}
                                page={page}
                                onChange={handlePageChange}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default PokemonList;
