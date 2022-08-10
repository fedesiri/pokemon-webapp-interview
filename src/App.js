import Navbar from "./components/Navbar";
import { Grid } from "@mui/material/";

function App() {
    return (
        <>
            <Navbar />

            <Grid container>
                <Grid item container xs={8} style={{ backgroundColor: "red", height: "1100px" }}>
                    <Grid
                        item
                        container
                        justifyContent="center"
                        alignItems="center"
                        xs={12}
                        style={{ backgroundColor: "yellow", height: "100px" }}
                    >
                        <Grid item>
                            <h1>Searchbar</h1>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h1>Pokemon List</h1>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    style={{
                        backgroundColor: "green",
                        height: "500px",
                        position: "sticky",
                        top: "100px",
                    }}
                >
                    <h1>Combat pokemons</h1>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
