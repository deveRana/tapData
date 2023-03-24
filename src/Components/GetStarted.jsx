import React from "react";
import { Box, Container, Typography,Button } from "@mui/material";

const GetStarted = () => {
    return (
        <Box sx={{ margin: "4rem 0" }} >
            <Container
                sx={{
                    display:"flex",
                    flexDirection :"column",
                    alignItems : 'center',
                    justifyContent : "center"
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { lg: "55px", md: "40px", sm: "30px", xs: "25px" },
                        fontWeight: "700",
                        color: "#000",
                        textAlign: "center"
                    }}
                >
                    Your {" "}
                    <Typography
                        variant="span"
                        sx={{
                            fontSize: { lg: "55px", md: "40px", sm: "30px", xs: "25px" },
                            fontWeight: "700",
                            background: "-webkit-linear-gradient(180deg, #0AB2EA 0%, #0489B5 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        career
                    </Typography>{" "}
                    is waiting ahead click on the button and{" "}
                    <Typography
                        variant="span"
                        sx={{
                            fontSize: { lg: "55px", md: "40px", sm: "30px", xs: "25px" },
                            fontWeight: "700",
                            background: "-webkit-linear-gradient(180deg, #0AB2EA 0%, #0489B5 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        get started
                    </Typography>
                </Typography>


                <Button
                    sx={{
                        background : "linear-gradient(180deg, #0AB2EA 0%, #0489B5 100%)",
                        color :"#fff",
                        fontSize : "16px",
                        fontWeight : "700",
                        marginTop : "1rem",
                        padding : '1rem 2rem'
                    }}
                >
                    Get Started
                </Button>

            </Container>
        </Box>
    );
};

export default GetStarted;
