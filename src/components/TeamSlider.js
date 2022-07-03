import React, { useEffect, useState } from "react";
import { Badge, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TeamSlider = ({ type, id }) => {
    const [action, setAction] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const ApiUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setAction(data.cast);
        };
        getData();
    }, [type, id]);
    var settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <Container style={{padding:'40px 0px'}}>
                <Slider {...settings}>
                    {action &&
                        action.map((element) => {
                            return (
                                <Card
                                    sx={{
                                        boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)",
                                        textAlign: "center",
                                        // width:'80%!important',
                                        padding: "20px 0px",
                                        width: { lg: "80%!important", xs: "100%!important" },
                                    }}
                                >
                                    <CardActionArea>
                                        <Badge badgeContent={element.popularity} color={element.popularity > 6 ? "primary" : "secondary"}>
                                            <CardMedia
                                                image={`http://image.tmdb.org/t/p/w300/${element.profile_path}`}
                                                title={element.name}
                                                style={{ height: "80px", width: "80px", borderRadius: "50%", objectFit: "cover", margin: " 0 auto" }}
                                            />
                                        </Badge>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" style={{ textTransform: "capitalize" }} sx={{ color: "inherit" }}>
                                                {element.name}
                                            </Typography>
                                            <Typography gutterBottom variant="p">
                                                {element.character}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            );
                        })}
                </Slider>
            </Container>
        </>
    );
};

export default TeamSlider;
