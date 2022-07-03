import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import SingleContent from "./SingleContent";
import Banner from "./Banner";
const TopRated = () => {
    const [author, setAuthor] = useState([]);
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const ApiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setAuthor(data.results);
            const random = Math.floor(Math.random() * data.results.length) + 1;
            setBanner(data.results[random]);
        };
        getData();
    }, []);
    return (
        <>
            {banner?.backdrop_path !== undefined && <Banner banner={banner} />}
            <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={2}>
                    {author &&
                        author.map((element) => {
                            let { id, title, release_date, vote_average, poster_path } = element;
                            return <SingleContent key={id} id={id} title={title} release_date={release_date} vote_average={vote_average} poster_path={poster_path} />;
                        })}
                </Grid>
            </Container>
        </>
    );
};

export default TopRated;
