import * as React from "react";
import img5 from "../../../assets/tm-img-660x330-1.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Title, Link } from "../../../styles/styles";
import { titles, posts,links } from "../../../data/data";
import Card from "../../cards/card1";
import { CardButon } from "../../cards/styled";
import { Img, Img2, Title2, Title3, Title4, Title5 } from "./styled";
import {ContactTitle2} from '../../contact/styled'
export default () => {
  return (
    <>
    <Box sx={{flexGrow:1,margin:'0 auto'}}>
    <Card xs={12} sm={6} md={3} num={4} />
    </Box>
      <Box sx={{ mt: 8 }}>
         <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
            <Grid item xs={12} md={6}>
              <Title2
               >
                Pellentesque fermentum mauris et posuere
              </Title2>
              <Title3>
                Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien
              </Title3>
              <Img
                src={img5}
                alt="#"
              />
              {titles.map((title, i) => {
                return <Title key={i}>{title.title}</Title>;
              })}
              <CardButon>
                READ MORE
              </CardButon>
            </Grid>
            <Grid item xs={12} md={6} >
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12}>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 6 }} >
                    <Grid item xs={12} sm={6} md={6}>
                      <Title4>
                        Categories
                      </Title4>
                     {links.slice(1,6).map((item, index)=>{
                      return(
                        <Link href='#' key={index}>
                          <p style={{lineHeight:index===0?'40px':"px",marginBottom:index===0?'2px':''}}>{item}</p>
                        </Link>
                      )
                     })}
                    </Grid>
                    <Grid item xs={12}  sm={6} md={6}>
                      <Title5>
                        Useful Links
                      </Title5>
                      {links.slice(6,11).map((item, index)=>{
                      return(
                        <Link href='#' key={index}>
                          <p style={{lineHeight:index===4?'50px':"22px",marginTop:index===4?'15px':'px'}}>{item}</p>
                        </Link>
                      )
                     })}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                <Title4>
                    Related Posts
                  </Title4>
                </Grid>
                <Grid item xs={12} md={12} sx={{mt:-2,mb:10}}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 0, md: 12 }}>
                    {posts.map((post, index) => (
                      <Grid item xs={12} sm={12} md={12} key={index}>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 6, sm:0, md: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <Img2
                              src={post.img}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <Typography
                    sx={{ color: "#cc9900", fontSize: 24, mt:0, mb: 2 }}>
                    Lorem ipsum dolor
                  </Typography>
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
      </Box>
    </>
  );
};
