import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


import starImg from "../assets/star.svg";

import img1 from "../assets/img1.svg"
import img2 from "../assets/img2.svg"

const Hero = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection : "column-reverse",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));

    return (
        <Box sx={{ backgroundColor: "#ffffff", minHeight: "80vh"  }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "0.8" , marginTop : {md : "4rem",sm : "4rem",xs : "4rem"} }}>
                        <Typography
                            variant="span"
                            sx={{
                                fontSize: "18px",
                                color: "#000",
                                fontWeight: "500",
                                padding: "0.6rem 2rem",
                                border: "1px solid rgba(10, 178, 234, 1)",
                                borderRadius: "10px"
                            }}
                        >
                            <img src={starImg} alt="starImg" width={"20px"} />
                            Trusted
                        </Typography>
                        <Title variant="h1">
                            Data that’s
                            Professional
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            If trading is a profession, then your data needs to be professional too. Trading as profession presents Data Blaze.
                        </Typography>

                        <Box>

                            <Button
                                sx={{
                                    background: "#fff",
                                    color: "#000",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    marginTop: "1rem",
                                    padding: '1rem 2rem',
                                    border: '1px solid rgba(0,0,0,0.2)',
                                    marginRight: "2rem"
                                }}>
                                Log In
                            </Button>

                            <Button
                                sx={{
                                    background: "linear-gradient(180deg, #0AB2EA 0%, #0489B5 100%)",
                                    color: "#fff",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    marginTop: "1rem",
                                    padding: '1rem 2rem',
                                    border: '1px solid transparent'
                                }}>
                                SIGN UP
                            </Button>

                        </Box>

                    </Box>

                    <Box sx={{ position : 'relative', }}>
                        <img src={img2} alt="img2" style={{ width: "500px", position: "absolute", top: "10%", right: "-5%" }} />
                        <img src={img1} alt="img1" style={{
                            width: "400px"
                        }} />

                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Hero;
