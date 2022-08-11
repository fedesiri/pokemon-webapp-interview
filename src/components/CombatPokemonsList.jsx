import { Paper, Typography, Grid, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { capitalizeLetter } from "../utils";
import DeleteIcon from "@mui/icons-material/Delete";

function CombatPokemonsList() {
    const combatPokemons = useSelector(state => state.combatPokemons);

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
                                style={{ textAlign: "center", marginTop: "15%" }}
                            >
                                Lista vacia, no hay ningun pokemon listo
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
                                                        // top: "10px",
                                                    }}
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
