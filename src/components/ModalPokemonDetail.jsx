import { useState } from "react";
import { Grid, Typography, Modal, Button, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { capitalizeLetter } from "../utils";
import { grey } from "@mui/material/colors";
import translations from "../utils/translations";

const style = {
    position: "absolute",
    top: "50%",
    left: "33.5%",
    transform: "translate(-50%, -50%)",
    width: "55%",
    height: "65%",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 2,
};

function ModalPokemonDetail({ pokemon }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function getStat(statName, value) {
        return (
            <Grid item container justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6" style={{ marginLeft: "30px" }}>
                        {statName}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" style={{ marginRight: "30px" }}>
                        {value}
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    return (
        <div>
            <Button variant="outlined" size="small" color="primary" onClick={handleOpen}>
                Ver Detalle
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <Grid item container direction="row" style={{ height: "90%" }}>
                            <Grid
                                item
                                container
                                xs={6}
                                direction="column"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Typography variant="h4">
                                        <b>{capitalizeLetter(pokemon.name)}</b> #{pokemon.id}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <div
                                        style={{
                                            backgroundImage: `url(${pokemon.primaryImage})`,
                                            backgroundSize: "100% 100%",
                                            height: "200px",
                                            width: "215px",
                                            marginTop: "30%",
                                        }}
                                    ></div>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Altura: {pokemon.height} cm
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="stretch"
                                xs={6}
                            >
                                <Grid item container justifyContent="flex-end">
                                    <Grid item>
                                        <IconButton>
                                            <AddIcon
                                                style={{ stroke: grey[700], strokeWidth: "2" }}
                                            />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Typography variant="h5">
                                            {pokemon.types.length === 1 ? "Tipo:" : "Tipos:"}
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent="center" columnSpacing={4}>
                                        {pokemon.types.map(type => {
                                            return (
                                                <Grid item key={type.id}>
                                                    <Typography>
                                                        {translations[type.name]}
                                                    </Typography>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justifyContent="space-around"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Typography variant="h4">Estadisticas</Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        direction="column"
                                        style={{
                                            marginBottom: "10px",
                                            border: `1px solid ${grey[700]}`,
                                            borderRadius: "10px",
                                        }}
                                    >
                                        {getStat("Velocidad", pokemon.stats.speed)}
                                        {getStat("Ataque", pokemon.stats.attack)}
                                        {getStat("Defensa", pokemon.stats.defense)}
                                        {getStat("Ataque especial", pokemon.stats.specialAttack)}
                                        {getStat("Defensa especial", pokemon.stats.specialDefense)}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent="center" alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="error">
                                    Cerrar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalPokemonDetail;
