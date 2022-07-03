import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import SingleContent from "./SingleContent";
import Paginations from "./Paginations";
import Banner from "./Banner";
const Western = () => {
    const [action, setAction] = useState([]);
    const [page, setPage] = useState("1");
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const ApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=37`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setAction(data.results);
            const random = Math.floor(Math.random() * data.results.length) + 1;
            setBanner(data.results[random]);
        };
        getData();
    }, [page]);
    return (
        <>
            {banner?.backdrop_path !== undefined && <Banner banner={banner} />}
            <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={2}>
                    {action &&
                        action.map((element) => {
                            let { id, title, release_date, vote_average, poster_path } = element;
                            return <SingleContent key={id} id={id} title={title} release_date={release_date} vote_average={vote_average} poster_path={poster_path} />;
                        })}
                </Grid>

                <Paginations setPage={setPage} count={action.length} />
            </Container>
        </>
    );
};

export default Western;
