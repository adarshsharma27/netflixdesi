import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SiderBar from "./SideBar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { NavLink, useLocation } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "50ch",
            },
        },
    },
}));

const Header = ({ search, setSearch, setType }) => {
    const url = useLocation();
    const [searchBar, setSearchBar] = useState(false);
    useEffect(() => {
        if (url.pathname === "/search") {
            setSearchBar(true);
        } else {
            setSearchBar(false);
            setType("movie");
        }
        // eslint-disable-next-line
    }, [url]);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <SiderBar>
                            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                        </SiderBar>

                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                            <img style={{ width: "80px" }} alt="Netflix" src="images/logo.png" />
                            Desi
                        </Typography>
                        {searchBar ? (
                            <>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase placeholder="Search…" value={search} inputProps={{ "aria-label": "search" }} onInput={(e) => setSearch(e.target.value)} />
                                </Search>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-label" sx={{ color: "inherit" }}>
                                        Category
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        sx={{ color: "inherit" }}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    >
                                        <MenuItem value="movie">Movies</MenuItem>
                                        <MenuItem value="tv">TvShows</MenuItem>
                                    </Select>
                                </FormControl>
                            </>
                        ) : (
                            // console.log(url.split("/").pop())
                            <NavLink to="/search" style={{ color: "#fff", textDecoration: "none" }}>
                                <SearchIcon />
                            </NavLink>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            {/* { 
    search && <Searchs search={search}/>
  }   */}
        </>
    );
};

export default Header;
