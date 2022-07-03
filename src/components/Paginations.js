import React from "react";
import { Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";
const Paginations = ({ setPage, count }) => {
    return (
        <>
            <Container style={{ paddingTop: "1rem", width: "fit-content" }}>
                <Pagination
                    count={count}
                    hidePrevButton
                    hideNextButton
                    onChange={(e) => {
                        setPage(e.target.innerText);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                    color="primary"
                />
            </Container>
        </>
    );
};

export default Paginations;
