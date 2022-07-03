import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SleddingIcon from "@mui/icons-material/Sledding";
import ScaleIcon from "@mui/icons-material/Scale";
import PoolIcon from "@mui/icons-material/Pool";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import LayersIcon from "@mui/icons-material/Layers";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import TokenIcon from "@mui/icons-material/Token";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import MovieIcon from "@mui/icons-material/Movie";
import { NavLink } from "react-router-dom";

const SiderBar = ({ children, setType }) => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/popular" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MonitorIcon />
                        </ListItemIcon>
                        <ListItemText>Popular</ListItemText>
                    </ListItem>
                </NavLink>

                <NavLink to="/toprated" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <StarBorderIcon />
                        </ListItemIcon>
                        <ListItemText>TopRated</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/action" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <SportsKabaddiIcon />
                        </ListItemIcon>
                        <ListItemText>Action</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/adventure" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <LandscapeIcon />
                        </ListItemIcon>
                        <ListItemText>Adventure</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/animation" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <LensBlurIcon />
                        </ListItemIcon>
                        <ListItemText>Animation</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/comedy" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <SentimentVerySatisfiedIcon />
                        </ListItemIcon>
                        <ListItemText>Comedy</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/crime" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <VpnLockIcon />
                        </ListItemIcon>
                        <ListItemText>Crime</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/documentary" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText>Documentary</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/drama" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <HourglassBottomIcon />
                        </ListItemIcon>
                        <ListItemText>Drama</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/family" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <FamilyRestroomIcon />
                        </ListItemIcon>
                        <ListItemText>Family</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/fantasy" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <PoolIcon />
                        </ListItemIcon>
                        <ListItemText>Fantasy</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/history" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <ScaleIcon />
                        </ListItemIcon>
                        <ListItemText>History</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/horror" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <ChildCareIcon />
                        </ListItemIcon>
                        <ListItemText>Horror</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/music" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AudiotrackIcon />
                        </ListItemIcon>
                        <ListItemText>Music</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/mystery" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <BubbleChartIcon />
                        </ListItemIcon>
                        <ListItemText>Mystery</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/romance" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText>Romance</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/sciencefiction" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <LineAxisIcon />
                        </ListItemIcon>
                        <ListItemText>ScienceFiction</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/tvmovie" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MovieIcon />
                        </ListItemIcon>
                        <ListItemText>TvMovie</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/thriller" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <SleddingIcon />
                        </ListItemIcon>
                        <ListItemText>Thriller</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/war" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MilitaryTechIcon />
                        </ListItemIcon>
                        <ListItemText>War</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to="/western" style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <TokenIcon />
                        </ListItemIcon>
                        <ListItemText>Western</ListItemText>
                    </ListItem>
                </NavLink>
            </List>
        </Box>
    );

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} color="inherit">
                        {children}
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SiderBar;
