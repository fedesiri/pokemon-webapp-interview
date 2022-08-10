import Navbar from "./components/Navbar";
import { Grid } from "@mui/material/";
import PokemonList from "./components/PokemonList";

function App() {
    return (
        <>
            <Navbar />

            <Grid container>
                <Grid item container xs={8}>
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

                    <Grid item xs={12}>
                        <PokemonList />
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
