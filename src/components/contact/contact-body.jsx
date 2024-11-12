import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box,} from "@mui/material";
import { links, posts } from "../../data/data";
import { Title, Text3, Link, Inputs } from "../../styles/styles";
import Iframe from "react-iframe";
import Card1 from "../cards/card1";
import { ContactBox, ContactButton, ContactImg, ContactInput, ContactTitle, ContactTitle2 } from "./styled";
import { CardButon } from "../cards/styled";


export default () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Text3>Pellentesque fermentum mauris</Text3>
          <Title>
            Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien.
            Quisque vel sem eu turpis ullamcorper euismod. Praesent quis nisi ac
            augue luctus viverra. Sed et dui nisi. Fusce vitae dapibus justo.
          </Title>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Inputs type="text" placeholder="Name" />
            <Inputs type="email" placeholder="Email" />
            <Inputs type="text" placeholder="Subject" />
            <ContactInput
  placeholder="Massage"
  onFocus={(e) => e.target.style.border = "1px solid #cc6600"}
  rows={9}
></ContactInput>
          </Box>
          <ContactButton>
            Submit
          </ContactButton>
          <Text3>Pellentesque fermentum mauris</Text3>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509577!2d144.95373531544364!3d-37.817209979751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e41!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1630291924418!5m2!1sen!2sus"
            width="100%"
            height="400px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />

          <Title>
            Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor
            tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet
            blandit nisl volutpat id.
          </Title>
          <Title>
            Donec mattis ipsum in erat viverra commodo. Proin sapien lacus,
            euismod eget nisl in, elementum posuere massa. Curabitur a odio
            eros. Cras aliquam lectus erat, non semper est volutpat eget. Ut
            eget erat tincidunt.
          </Title>
          <CardButon>
            Detail
          </CardButon>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <ContactBox>
                <Text3 style={{ marginBottom: 16 }}>Categories</Text3>
                {links.slice(0, 6).map((item, i) => {
                  return (
                    <Link style={{ fontSize: 20 }} href="#" key={i}>
                      <p>{item}</p>
                    </Link>
                  );
                })}
              </ContactBox>
              <Box sx={{ pb: 5, mb: 4,pt:3 }}>
                <Text3 style={{ marginBottom: 16 }}>Useful Links</Text3>
                {links.slice(4, 11).map((item, i) => {
                  return (
                    <Link href="#" key={i}>
                      <p>{item}</p>
                    </Link>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{mt:2}}>
            <Box sx={{pb:7}}>
            <Card1 xs={12} sm={12} md={12} num={2}  />
            </Box>
              
            </Grid>
            <Grid item xs={12} md={12} sx={{borderTop:'1px solid #8c8c8c',mt:-4,ml:4}}>
              <Grid item xs={12} md={12} sx={{mt:3}} >
                <ContactTitle>
                  Related Posts
                </ContactTitle>
              </Grid>
              <Grid item xs={12} md={12} sx={{ mt: -5, mb: 10 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 12, md: 12 }}>
                  {posts.map((post, index) => (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 6, sm: 3, md: 3 }}>
                        <Grid item xs={12} sm={4} md={6}>
                          <ContactImg
                            src={post.img}
                            alt=""
                          />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                          <ContactTitle               >
                            Lorem ipsum dolor
                          </ContactTitle>
                          <ContactTitle2>
                            {post.title}
                          </ContactTitle2>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
