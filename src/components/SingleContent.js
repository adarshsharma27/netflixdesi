import { Badge, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Cards = ({ id, title, release_date, vote_average, poster_path }) => {
    let navigate = useNavigate();

    return (
        <>
            <Grid
                item
                xs={12}
                md={2}
                sm={4}
                onClick={() => {
                    navigate(`/${id}`);
                }}
            >
                <Card sx={{ boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)", margin: "0 auto", borderRadius: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            image={poster_path ? `http://image.tmdb.org/t/p/w300/${poster_path}` : `../images/noposter.jpg`}
                            title={title}
                            style={{ height: "260px", objectFit: "cover", margin: " 0 auto", borderRadius: "20px 20px 0px 0px" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" fontSize="1rem" style={{ textTransform: "capitalize" }} sx={{ color: "inherit" }}>
                                {title || "No Title.."}
                            </Typography>
                            <Typography gutterBottom svariant="p" sx={{ display: "block" }}>
                                {release_date || "No Date.."}
                            </Typography>
                            <Badge className="card-badge" badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}></Badge>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default Cards;
