import React from 'react'
import { Box, Container, styled, Typography } from "@mui/material";
import img1 from "../assets/img1.svg"
import img2 from "../assets/img2.svg"

const Finance = () => {


    const FinanceContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    }));


    return (
        <Box sx={{ backgroundColor: "#fff", py: 2 }}>
            <FinanceContainer>

                <Box
                    sx={{
                        position : "relative"
                    }}
                >

                    <img src={img1} alt="img1" style={{
                        width : "400px"
                    }} />
                    <img src={img2} alt="img2" style={{width:"500px" ,position : "absolute",top : "10%" , right : "-15%"}} />

                    

                </Box>

                <Box
                    sx={{
                        width: {lg : "40%", md:"80%" , sm : "90%"},
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: 'flex-start',
                        justifyContent: "center"
                    }}
                >

                    <Typography variant='h2'
                        sx={{
                            fontSize: "35px",
                            fontWeight: "700",
                            color: "#000"
                        }}
                    >
                        Finance can’t hold you back now.
                    </Typography>

                    <Typography variant='p'
                        sx={{
                            marginTop : '1rem',
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "rgba(27, 27, 27, 0.85)"
                        }}
                    >
                        If finance is your challenge then finance can’t challenge, if you are a part of trading as profession. we are there to support you. To know more about how we can help you.
                    </Typography>

                </Box>

            </FinanceContainer>
        </Box>
    )
}

export default Finance