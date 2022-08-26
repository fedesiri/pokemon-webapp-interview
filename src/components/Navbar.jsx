import { AppBar, Toolbar, Grid, Paper, IconButton } from "@mui/material/";
import { grey } from "@mui/material/colors";
import logo from "../assets/logo.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
                    </Grid>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="flex-end"
                        // style={{ backgroundColor: "white" }}
                    >
                        <Grid item>
                            <IconButton
                                href="https://www.linkedin.com/in/federico-siri/"
                                target="none"
                            >
                                <LinkedInIcon sx={{ color: grey[100], fontSize: 35 }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton href="https://github.com/fedesiri" target="none">
                                <GitHubIcon sx={{ color: grey[100], fontSize: 35 }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Paper>
    );
}

export default Navbar;
