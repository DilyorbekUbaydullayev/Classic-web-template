import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { links } from "../../../data/data";
import { Title, Text3, Link } from "../../../styles/styles";
export default () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:3 }}>
        <Grid item xs={12} sm={4} md={3}>
          <Text3 style={{marginBottom:-5}}>Sidebar Links</Text3>
          {links.slice(0, 6).map((link, i) => {
            return (
              <Link href="#" key={i}>
                <p>{link}</p>
              </Link>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Text3 style={{marginBottom:-10}}>Pellentesque fermentum mauris</Text3>
          <Title>Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien</Title>
          <Title>
            Quisque vel sem eu turpis ullamcorper euismod. Praesent quis nisi ac
            augue luctus viverra. Sed et dui nisi. Fusce vitae dapibus justo.
            Pellentesque accumsan est ac posuere imperdiet. Curabitur eros mi,
            lacinia at euismod quis, dapibus vel ligula. Ut sodales erat vitae
            nunc tempor mollis. Donec tempor lobortis tortor, in feugiat massa
            facilisis sed. Ut dignissim viverra pretium. In eu justo maximus
            turpis feugiat finibus scelerisque nec eros.
          </Title>
          <Title>
            Classic Template provides a great flexibility to arrange the content
            in any way you like. Please tell your friends about templatemo. Nam
            sem neque, finibus id sem pharetra, cursus porttitor ligula.
            Praesent aliquam fermentum dui, vitae venenatis libero vulputate ac.
            Fusce bibendum scelerisque magna eget iaculis.
          </Title>
        </Grid>
      </Grid>
    </Box>
  );
};
