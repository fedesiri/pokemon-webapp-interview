import { capitalizeLetter } from "../utils";
import {
    Button,
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

function PokemonCard({ pokemon }) {
    const combatPokemons = useSelector(state => state.combatPokemons);
    const dispatch = useDispatch();

    function addPokemonToSelection() {
        if (combatPokemons.length < 6) {
            dispatch(addCombatPokemon(pokemon.id));
        } else {
            swAlert.fire({
                title: "Error",
                text: "Solo puede haber 6 pokemones para combate!",
                icon: "error",
                confirmationButtonText: "ok",
            });
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
                        <Typography gutterBottom variant="h5" component="div">
                            {capitalizeLetter(pokemon.name)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="outlined" size="small" color="primary">
                        Ver Detalle
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
}

export default PokemonCard;
