import { Box, Button, styled, Typography } from "@mui/material";

export const NavbarTitle = styled(Typography)(({theme})=>({
    marginLeft:'1.8rem',
     display:"flex",
     fontFamily: 'Open Sans,Helvetica,sans-serif',
     fontWeight: 500,
     letterSpacing: "0",
     color: "#CC9900",
     textDecoration: "none",
     fontSize: 41.5,
     [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));
export const NavbarTitle2 = styled(Typography)(({theme})=>({
    marginRight: '1rem',
    display: 'none',
    flexGrow: 1,
    fontFamily: 'sans-serif',
    fontWeight: 500,
    letterSpacing: "0",
    color: "#CC9900",
    textDecoration: "none",
    fontSize: 40,
    [theme.breakpoints.down("md")]: {
        display: "flex",
    },
}));
export const NavbarBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    justifyContent: "end",
    marginRight: 45,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export const NavbarButton = styled(Button)(({rang,index})=>({
    marginBlock: '1rem',
    borderRadius:'0.4rem',
    padding:'8.5px 39px',
    color: rang === index ? "#fff" : "black",
    display: "block",
    fontFamily: 'Open Sans,Helvetica,sans-serif',
    fontSize: "18px",
    textTransform:'capitalize',
    backgroundColor: rang === index ? "#CC9900" : "white",
    "&:hover": { backgroundColor: "#CC9900", color: "white" },
}))

