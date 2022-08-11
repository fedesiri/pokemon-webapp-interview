import { Paper, Typography, Grid, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeLetter } from "../utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeCombatPokemon } from "../redux/actions";
import swAlert from "sweetalert2";

function CombatPokemonsList() {
    const combatPokemons = useSelector(state => state.combatPokemons);

    const dispatch = useDispatch();
    // console.log("soy combatPokemons!!!! ", combatPokemons);
    function removePokemonToSelection(id) {
        const pokemonToDelete = combatPokemons.find(pokemon => pokemon.id === id);
        swAlert
            .fire({
                title: "ATENCION!",
                text: `¿Estás seguro que querés eliminar a ${capitalizeLetter(
                    pokemonToDelete.name
                )} de la lista de combate?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
            })
            .then(result => {
                if (result.isConfirmed) {
                    dispatch(removeCombatPokemon(id));
                    swAlert.fire(
                        ` ${capitalizeLetter(
                            pokemonToDelete.name
                        )} ha sido eliminado de la lista de combate`
                    );
                }
            });
    }

    return (
        <Paper
            elevation={10}
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                border: `solid 1px ${grey[500]}`,
            }}
        >
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={4}
            >
                <Grid item style={{ marginTop: "3%" }}>
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                        <b>Listos para el combate!</b>
                    </Typography>
                </Grid>
                <Grid item container justifyContent="space-between" alignItems="flex-start">
                    {!combatPokemons.length ? (
                        <Grid item>
                            <Typography
                                variant="h6"
                                style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    marginTop: "25%",
                                    marginLeft: "25%",
                                    width: "60%",
                                }}
                            >
                                Lista vacia, no hay ningun pokemon listo.
                            </Typography>
                        </Grid>
                    ) : (
                        combatPokemons.map(pokemon => {
                            return (
                                <Grid
                                    item
                                    container
                                    justifyContent="center"
                                    xs={6}
                                    key={pokemon.id}
                                >
                                    <Grid
                                        item
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        xs={10}
                                    >
                                        <Grid item>
                                            <div
                                                style={{
                                                    height: "100px",
                                                    width: "100px",

                                                    backgroundImage: `url(${pokemon.secondaryImage})`,
                                                    backgroundSize: "100% 100%",
                                                }}
                                            >
                                                <IconButton
                                                    style={{
                                                        position: "relative",
                                                        left: "75px",
                                                    }}
                                                    onClick={() =>
                                                        removePokemonToSelection(pokemon.id)
                                                    }
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </div>
                                        </Grid>

                                        <Grid item>
                                            <Typography>
                                                <b>{capitalizeLetter(pokemon.name)}</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            );
                        })
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CombatPokemonsList;
