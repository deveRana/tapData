import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../assets/logo.svg";
import starImg from "../assets/star.svg";
import { Container } from "@mui/system";
// import CustomButton from "./CustomButton";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


export const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.type === "Tab" || event.type === "Shift")
        ) {
            return;
        }

        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center",
                width: anchor === "top" || anchor === "bottom" ? "auto" : "100vw",
                height: "100vh",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <CloseIcon
                sx={{
                    position: "absolute",
                    top: "40px",
                    right: "40px",
                    fontSize: '40px',
                    cursor: "pointer"
                }}
                onClick={toggleDrawer(anchor, false)}
            />

            <List>
                {["Home", "Our Products", "About TAPDATA"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding
                            sx={{
                                fontSize: "1.4rem !important",
                                color: "#000",
                                fontWeight: "700",
                                padding: "1rem 0",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "#0AB2EA",
                                },
                            }}
                        >
                            {text}
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "rgba(0,0,0,0.5)",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "rgba(0,0,0,1)",
        },
    }));

    const Navbtn = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "rgba(0,0,0,0.5)",
        fontWeight: "bold",
        borderRight: "1.5px solid rgba(0,0,0,0.9)",
        paddingRight: "1rem",
        cursor: "pointer",
        "&:hover": {
            color: "rgba(0,0,0,1",
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const Navbtn2 = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "rgba(0,0,0,0.5)",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "rgba(0,0,0,1",
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const NavbtnLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        }, marginTop: '-1rem'
    }));


    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
        borderBottom: "2px solid rgba(0,0,0,0.1)"
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer"
    }));

    return (
        <NavbarContainer>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <NavbarLogo src={logoImg} alt="logo" />

            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >


                <NavbarLinksBox>
                    <NavLink variant="body2">Home</NavLink>
                    <NavLink variant="body2">Our Products</NavLink>
                    <NavLink variant="body2">About TapData</NavLink>
                </NavbarLinksBox>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >

                <NavbarLinksBox>

                    <Navbtn >Log In</Navbtn>
                    <Navbtn2 >Create Account</Navbtn2>
                    <NavbtnLogo src={starImg} alt={starImg} />
                </NavbarLinksBox>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor="left"
                        open={mobileMenu["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                </Box>

            </Box>



        </NavbarContainer>
    );
};

export default Navbar;
