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

function PokemonCard({ pokemon }) {
    return (
        <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActions disableSpacing>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <IconButton>
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
