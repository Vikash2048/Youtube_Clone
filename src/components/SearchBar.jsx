import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconButton, Paper } from "@mui/material";

import { Search } from "@mui/icons-material";



const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // use to prevent page loading 
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

// paper is just like a div have background white and some border raduis

export default SearchBar;
