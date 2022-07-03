import Typography from "@mui/material/Typography";

const Banner = ({ banner }) => {
    let date = banner?.release_date;
    if (date === undefined) {
        date = "2022-05-04";
    }
    return (
        <>
            <div
                className="details"
                style={{
                    backgroundImage: banner?.backdrop_path === undefined ? `url('../images/nobackdrop.jpg')` : `url('http://image.tmdb.org/t/p/original/${banner?.backdrop_path}')`,
                    width: "100%",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="content">
                    <Typography gutterBottom variant="h2" style={{ fontSize: "3rem", color: "#fff" }}>
                        {banner?.title}
                    </Typography>
                    <Typography gutterBottom variant="p" style={{ fontSize: "1.5rem", lineHeight: "2rem", color: "#fafafa" }}>
                        {new Date(date).toLocaleDateString("en-in", { day: "numeric", month: "short", year: "numeric" })}
                    </Typography>
                    <Typography gutterBottom variant="p" style={{ fontSize: "1.2rem", lineHeight: "2rem", color: "#fbfbfb" }}>
                        {banner?.overview.length > 400 ? banner?.overview.substring(0, 320) + "....." : banner?.overview}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default Banner;
