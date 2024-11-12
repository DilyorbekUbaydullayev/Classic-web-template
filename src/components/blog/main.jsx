import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { links } from "../../data/data";
import { Title, Text3, Link } from "../../styles/styles";
import img from "../../assets/tm-img-1010x336-1.jpg";
import Aboutcard from "../cards/card1";


export default () => {
  return (
    <Box sx={{ width: "100%",paddingBottom:5}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 6 }}>
        <Grid item xs={12} sm={8} md={9} >
          <Text3 style={{marginBottom:-15}}>Pellentesque fermentum mauris</Text3>
          <Title>
            Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien
          </Title>
          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt="" />
          <Title>
            You can help templatemo by telling your friends about our HTML CSS
            templates. Praesent velit ante, congue ac dignissim in, vehicula sit
            amet urna. Fusce in dapibus quam, eget finibus velit. Nullam erat
            odio, vulputate id est ut, consequat rutrum justo. Vivamus vel leo
            vel nunc tincidunt mattis. Sed neque diam, semper suscipit dictum a,
            sodales ac metus. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </Title>
          <Title>
            Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor
            tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet
            blandit nisl volutpat id. Fusce sagittis ultricies felis, non luctus
            mauris lacinia quis. Ut fringilla lacus ac tempor ullamcorper.
            Mauris iaculis placerat ex et mattis.
          </Title>
          <Title>
            Quisque vel sem eu turpis ullamcorper euismod. Praesent quis nisi ac
            augue luctus viverra. Sed et dui nisi. Fusce vitae dapibus justo.
            Pellentesque accumsan est ac posuere imperdiet. Curabitur eros mi,
            lacinia at euismod quis, dapibus vel ligula. Ut sodales erat vitae
            nunc tempor mollis. Donec tempor lobortis tortor, in feugiat massa
            facilisis sed. Ut dignissim viverra pretium. In eu justo maximus
            turpis feugiat finibus scelerisque nec eros. Cras nec lectus tempor
            nibh vestibulum eleifend et ac elit.
          </Title>
          <Title style={{paddingBottom:60}}>
            Sed vitae luctus libero. Nam sem neque, finibus id sem pharetra,
            cursus porttitor ligula. Praesent aliquam fermentum dui, vitae
            venenatis libero vulputate ac. Fusce bibendum scelerisque magna eget
            iaculis. Phasellus non arcu eu sem convallis semper. Duis vulputate
            dignissim rhoncus.
          </Title>
            <Aboutcard xs={12} sm={11} md={4} num={3} />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
            <Box sx={{borderBottom:'1px solid #8c8c8c',pb:5}}>
            <Text3 style={{marginBottom:16}}>Categories</Text3>
            {links.slice(0,6).map((item,i)=>{
                return(
                    <Link href='#' key={i}>
                        <p >{item}</p>
                    </Link>
                )
            })}
            </Box>
            <Box sx={{borderBottom:'1px solid #8c8c8c',pb:5,mb:4}}>
            <Text3 style={{marginBottom:16}}>Useful Links</Text3>
            {links.slice(6,11).map((item,i)=>{
                return(
                    <Link href='#' key={i}>
                        <p >{item}</p>
                    </Link>
                )
            })}
            </Box>
            {Array.from(Array(3)).map((_, index) =>{
                return(
                    <Box key={index}>
                        <Link style={{fontSize:25}}>Duis sit amet tristique <br /> #{index+1}</Link>
          <Title  style={{borderBottom:index!=2?'1px solid #8c8c8c':'none',paddingBottom:25}}>
            Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique
            nibh. Nunc in molestie elit.
          </Title>
                    </Box>
                )
            } 
    
  )}
        </Grid>
      </Grid>
    </Box>
  );
};
