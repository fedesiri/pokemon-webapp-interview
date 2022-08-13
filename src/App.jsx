import { useState } from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material/";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import CombatPokemonsList from "./components/CombatPokemonsList";
import { grey } from "@mui/material/colors";

function App() {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <Navbar />

            <Grid container style={{ backgroundColor: grey[200] }}>
                <Grid
                    item
                    container
                    xs={8}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <Grid
                        item
                        container
                        justifyContent="center"
                        style={{ marginTop: "5%", marginBottom: "5%" }}
                    >
                        <Grid item xs={6}>
                            <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <PokemonList searchText={searchText} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    xs={4}
                    style={{
                        height: "500px",
                        position: "sticky",
                        top: "100px",
                    }}
                >
                    <Grid item xs={11}>
                        <CombatPokemonsList />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
