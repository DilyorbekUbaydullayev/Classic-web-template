import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Title, Text3,} from "../../../styles/styles";

export default ()=> {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid item xs={12}>
          <Text3 style={{ marginBottom: -10 }}>
            Pellentesque fermentum mauris
          </Text3>
          <Title>
            Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien
          </Title>
          <Title>
            Nulla ultrices nibh ac accumsan lobortis. Nulla facilisi. Praesent
            velit ante, congue ac dignissim in, vehicula sit amet urna. Fusce in
            dapibus quam, eget finibus velit. Nullam erat odio, vulputate id est
            ut, consequat rutrum justo. Vivamus vel leo vel nunc tincidunt
            mattis. Sed neque diam, semper suscipit dictum a, sodales ac metus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Morbi vel pharetra massa, non iaculis
            tortor. Nulla porttitor tincidunt felis et feugiat. Vivamus
            fermentum ligula justo, sit amet blandit nisl volutpat id.
          </Title>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={6}>
              <Text3 style={{ marginBottom: -10 }}>
                Pellentesque fermentum mauris
              </Text3>
              <Title>
                Vivamus vel leo vel nunc tincidunt mattis. Sed neque diam,
                semper suscipit dictum a, sodales ac metus. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Morbi vel pharetra massa, non iaculis tortor. Nulla
                porttitor tincidunt felis et feugiat.
              </Title>
              <Title>
                Vivamus fermentum ligula justo, sit amet blandit nisl volutpat
                id. Fusce sagittis ultricies felis, non luctus mauris lacinia
                quis. Ut fringilla lacus ac tempor ullamcorper. Mauris iaculis
                placerat ex et mattis.
              </Title>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Text3 style={{ marginBottom: -10 }}>
                Pellentesque fermentum mauris
              </Text3>
              <Title>
                Fusce in dapibus quam, eget finibus velit. Nullam erat odio,
                vulputate id est ut, consequat rutrum justo. Vivamus vel leo vel
                nunc tincidunt mattis. Sed neque diam, semper suscipit dictum a,
                sodales ac metus. Quisque vel sem eu turpis ullamcorper euismod.
                Praesent quis nisi ac augue luctus viverra. Sed et dui nisi.
              </Title>
              <Title>
                Fusce vitae dapibus justo. Pellentesque accumsan est ac posuere
                imperdiet. Curabitur eros mi, lacinia at euismod quis, dapibus
                vel ligula. Ut sodales erat vitae nunc tempor mollis.
              </Title>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
