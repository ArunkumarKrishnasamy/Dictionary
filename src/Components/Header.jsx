import React from "react";
import "./Header.css";
import {
  Button,
  CssBaseline,
  MenuItem,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header({ word, setWord, meaning, setMeaning }) {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const currencies = ["Tamil", "English", "Hindhi"];

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary"} </span>
      <br />
      <div className="row inputfield">
        <span className="col">
          <SearchIcon
            style={{ marginTop: "20px", marginRight: "2px" }}
            className="searchicon"
          />
          <TextField
            id=""
            label="Search"
            variant="standard"
            className="search"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          ></TextField>
        </span>

        <span className="col">
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="English"
            className="language"
          >
            {currencies.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </span>
        {/* <ThemeProvider theme={lightTheme}>
          <CssBaseline />
        </ThemeProvider> */}
      </div>
    </div>
  );
}

export default Header;
