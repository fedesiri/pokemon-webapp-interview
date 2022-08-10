import { useState } from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material/";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";

function App() {
    const [searchText, setSearchText] = useState("");

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
                        style={{ height: "100px" }}
                    >
                        <Grid item xs={6}>
                            <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <PokemonList searchText={searchText} />
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
