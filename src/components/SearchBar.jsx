import { TextField } from "@mui/material";

function SearchBar({ searchText, setSearchText }) {
    function handleChange(e) {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    return (
        <TextField
            label="Buscá tu pokemon!"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={searchText}
        />
    );
}

export default SearchBar;
