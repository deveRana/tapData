import { Box, Container, styled, Typography } from "@mui/material";
import { maxHeight } from "@mui/system";
import React from "react";
// import { properties } from "../properties";


const featuresContent = [
    {
        heading: "Superior Data",
        description: "Covers all the data points meant for professional traders and investors in the market."
    }
    ,
    {
        heading: "Robust Performance",
        description: "Offers high frequency data for the market with ultra low latency."
    }
    ,
    {
        heading: "Practical to use",
        description: "Data points available at a glance, no strangle and signal based struggle."
    }
    ,
    {
        heading: "Performance benchmark",
        description: "Offers you live data from exchange along with charts from Trading View directly."
    }
]


const Features = () => {
    const FeatureBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    }));

    const FeatureTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    }));

    return (
        <Box sx={{ mt: 5, backgroundColor: "#fff", py: 10 }}>
            <Container>
                <FeatureTextBox>
                    <Typography
                        sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
                    >
                        Features
                    </Typography>
                    <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
                        You have been looking for
                    </Typography>
                </FeatureTextBox>

                <FeatureBox>
                    {featuresContent.map((feature) => {

                        return (
                            <Box
                                sx={{
                                    background: " linear-gradient(98.05deg, #0AB2EA 5.59%, #6F0478 296.05%)",
                                    height: "250px",
                                    width: "250px",
                                    borderRadius: "8px",
                                    display : "flex",
                                    flexDirection : "column",
                                    alignItems : "center",
                                    justifyContent : "center",
                                    padding:"1rem 2rem",
                                    marginBottom : '1rem'
                                }}
                            >

                                <Typography sx={{ color: "#ffffff", fontSize: "23px", mt: 1 }}>
                                    {feature.heading}
                                </Typography>

                                <Typography sx={{ color: "#1B1B1B", fontSize: "14px", mt: 1 }}>
                                    {feature.description}
                                </Typography>

                            </Box>
                        )

                    })}
                </FeatureBox>
            </Container>
        </Box>
    );
};

export default Features;
