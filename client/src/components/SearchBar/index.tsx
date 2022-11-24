import { FormEvent } from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <Box component="form">
      <TextField id="search" label="search..." variant="standard" />
    </Box>
  );
};

export default SearchBar;
