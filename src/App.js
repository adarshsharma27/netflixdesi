import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Action from "./components/Action";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import TvShows from "./components/TvShows";
import Adventure from "./components/Adventure";
import Animation from "./components/Animation";
import Comedy from "./components/Comedy";
import Crime from "./components/Crime";
import Documentary from "./components/Documentary";
import Drama from "./components/Drama";
import Family from "./components/Family";
import Fantasy from "./components/Fantasy";
import History from "./components/History";
import Horror from "./components/Horror";
import Music from "./components/Music";
import Mystery from "./components/Mystery";
import Romance from "./components/Romance";
import ScienceFiction from "./components/ScienceFiction";
import Western from "./components/Western";
import War from "./components/War";
import Thriller from "./components/Thriller";
import TvMovie from "./components/TvMovie";
import Details from "./components/Details";
import Trending from "./components/Trending";
import Searchs from "./components/Searchs";
import { useState } from "react";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
function App() {
    const [search, setSearch] = useState("cars");
    const [type, setType] = useState("movie");
    console.table(type);
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Header search={search} setSearch={setSearch} setType={setType} />
                <Routes>
                    <Route path="/" element={<Trending />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvshows" element={<TvShows />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/toprated" element={<TopRated />} />
                    <Route path="/action" element={<Action />} />
                    <Route path="/adventure" element={<Adventure />} />
                    <Route path="/animation" element={<Animation />} />
                    <Route path="/comedy" element={<Comedy />} />
                    <Route path="/crime" element={<Crime />} />
                    <Route path="/documentary" element={<Documentary />} />
                    <Route path="/drama" element={<Drama />} />
                    <Route path="/family" element={<Family />} />
                    <Route path="/fantasy" element={<Fantasy />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/horror" element={<Horror />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/mystery" element={<Mystery />} />
                    <Route path="/romance" element={<Romance />} />
                    <Route path="/sciencefiction" element={<ScienceFiction />} />
                    <Route path="/tvmovie" element={<TvMovie />} />
                    <Route path="/thriller" element={<Thriller />} />
                    <Route path="/war" element={<War />} />
                    <Route path="/western" element={<Western />} />
                    <Route path="/search" element={search && <Searchs search={search} type={type} />} />
                    <Route path="/:id" element={<Details type={type} />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
