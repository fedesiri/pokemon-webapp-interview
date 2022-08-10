import { AppBar, Toolbar, Grid, Paper } from "@mui/material/";
import { grey } from "@mui/material/colors";
import logo from "../assets/logo.webp";
import logoWm from "../assets/logoWm.png";

const classes = {
    appbar: { backgroundColor: grey[800], paddingTop: "0.5%", paddingBottom: "0.5%" },
};

function Navbar() {
    return (
        <Paper elevation={5}>
            <AppBar position="static" style={classes.appbar}>
                <Toolbar variant="dense">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <img src={logo} alt="" width="110px" />
                        </Grid>
                        <Grid item>
                            <img src={logoWm} alt="" width="70px" />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Paper>
    );
}

export default Navbar;
