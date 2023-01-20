import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { logo } from "../utils/constants";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center"}}>
      <img src={logo} alt="logo" height={45} />
     <Typography varient="h1" sx={{color: 'white', ml: 1, fontSize: '2rem', fontWeight: 800}}>
      Minitube
      </Typography> 
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
