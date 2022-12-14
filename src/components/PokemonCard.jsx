import { capitalizeLetter } from "../utils";
import {
    CardActionArea,
    CardActions,
    Typography,
    CardMedia,
    CardContent,
    Card,
    Grid,
    IconButton,
    Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addCombatPokemon } from "../redux/actions";
import { useSelector } from "react-redux";
import swAlert from "sweetalert2";
import { green } from "@mui/material/colors";
import ModalPokemonDetail from "./ModalPokemonDetail";

function PokemonCard({ pokemon }) {
    const combatPokemons = useSelector(state => state.combatPokemons);
    const dispatch = useDispatch();

    function addPokemonToSelection() {
        const pokemonAlreadyExists = combatPokemons.find(poke => poke.id === pokemon.id);

        if (pokemonAlreadyExists) {
            swAlert.fire({
                title: "Error",
                text: `El pokemon '${capitalizeLetter(
                    pokemon.name
                )}' ya está en la lista de combate!`,
                icon: "error",
                confirmButtonColor: `${green[700]}`,
                confirmationButtonText: "ok",
            });
        } else if (combatPokemons.length >= 6) {
            swAlert.fire({
                title: "Error",
                text: "Solo puede haber 6 pokemones para combate!",
                icon: "error",
                confirmButtonColor: `${green[700]}`,
                confirmationButtonText: "ok",
            });
        } else {
            dispatch(addCombatPokemon(pokemon.id));
        }
    }

    return (
        <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActions disableSpacing>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <IconButton onClick={addPokemonToSelection}>
                                <AddIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardActions>
                <CardActionArea>
                    <CardMedia
                        component="div"
                        alt="img not found"
                        style={{
                            backgroundImage: `url(${pokemon.primaryImage})`,
                            backgroundSize: "100% 100%",
                            height: "160px",
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" style={{ textAlign: "center" }}>
                            <b>{capitalizeLetter(pokemon.name)}</b>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                    <ModalPokemonDetail pokemon={pokemon} />
                </CardActions>
            </Card>
        </Paper>
    );
}

export default PokemonCard;
