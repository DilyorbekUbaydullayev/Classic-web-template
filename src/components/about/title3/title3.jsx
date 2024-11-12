import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Title, Link } from "../../../styles/styles";
import Card1 from "../../cards/card1";

export default () => {
  return (
    <Box sx={{ width: "100%",pb:10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid item xs={12} sm={6} md={9}>
            <Card1 xs={12} sm={11} md={4} num={3} />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} sx={{mt:-0.5}}>
          <Link style={{fontSize:25}}>Duis sit amet tristique <br /> #1</Link>
          <Title  style={{borderBottom:'1px solid #8c8c8c',paddingBottom:25}}>
            Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique
            nibh. Nunc in molestie elit.
          </Title>
          <Link style={{fontSize:25}}>Duis sit amet tristique <br /> #1</Link>
          <Title>
            Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique
            nibh. Nunc in molestie elit.
          </Title>
        </Grid>
      </Grid>
    </Box>
  );
};
