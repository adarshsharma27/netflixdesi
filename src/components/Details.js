import { Badge, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import TeamSlider from "./TeamSlider";
const Details = ({ type, setType }) => {
    const { id } = useParams();
    const [action, setAction] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState();

    useEffect(() => {
        const getData = async () => {
            const ApiUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setAction(data);
        };

        getData();
    }, [id, type]);

    const handleUrl = () => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(action?.title || "").then((url) => {
                const urlParams = new URL(url);
                const videoUrl = urlParams.searchParams.get("v");
                setTrailerUrl(videoUrl);
            });
        }
    };
    const opts = {
        height: "400",
        width: "650",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <>
            <div className="details" style={{ backgroundImage: `url('http://image.tmdb.org/t/p/original/${action?.backdrop_path}')`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundPosition: "center center" }} sx={{}}>
                <div className="content">
                    <Badge badgeContent={action?.vote_average} Ratings color={action?.vote_average > 6 ? "primary" : "secondary"}>
                        <Typography variant="h2" style={{ fontSize: "2.1rem", color: "inherit" }}>
                            {action?.title}
                        </Typography>
                    </Badge>
                    <Typography variant="h5" style={{ color: "#fff" }} fontWeight="600">
                        {action?.tagline}
                    </Typography>
                    {type === "movie" ? (
                        <Typography gutterBottom variant="p" style={{ fontSize: "1.5rem", lineHeight: "2rem", color: "#fafafa" }}>
                            {new Date(action?.release_date).toLocaleDateString("en-in", { day: "numeric", month: "short", year: "numeric" })}
                        </Typography>
                    ) : (
                        ""
                    )}

                    <Typography gutterBottom variant="p" style={{ fontSize: "1.2rem", lineHeight: "2rem", color: "#fbfbfb" }}>
                        {action?.overview?.length > 450 ? action?.overview.substring(0, 400) + "....." : action?.overview}
                    </Typography>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Button variant="contained" color="primary" href={action?.homepage} target="_blank" rel="noreferrer">
                            Website
                        </Button>
                        <Button variant="contained" color="secondary" href={`https://www.imdb.com/title/${action?.imdb_id}`} target="_blank" rel="noreferrer">
                            IMDB
                        </Button>
                        <Button variant="contained" color="success" onClick={() => handleUrl()}>
                            YouTube
                        </Button>
                    </Stack>
                    <TeamSlider id={id} type={type} />
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                </div>
            </div>
        </>
    );
};

export default Details;
