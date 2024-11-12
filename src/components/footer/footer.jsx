import React from "react";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/tm-img-100x100-1.jpg";
import img2 from "../../assets/tm-img-100x100-2.jpg";
import img3 from "../../assets/tm-img-100x100-3.jpg";
import img4 from "../../assets/tm-img-100x100-4.jpg";
import img5 from "../../assets/tm-img-100x100-5.jpg";
import img6 from "../../assets/tm-img-100x100-6.jpg";
import { Text3, Linkyellow,} from "../../styles/styles";
import {Container,} from "@mui/material";
import { BgImg, FooterBox, FooterBox2, FooterButton, FooterImg, FooterTitle, FooterTitle2 } from "./styled";
import { links } from "../../data/data";
const footer = () => {
  const Images = [img1, img2, img3, img4, img5, img6]
  return (
    <div>
      <BgImg>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Text3>Proin eu posuere felis</Text3>
              <FooterBox>
                <p>
                  Classic is free HTML CSS website template provided by
                  templatemo for everyone. Feel free to use it.
                </p>
                <p>
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra.
                </p>
                <p style={{ fontWeight: "500", fontSize: 19 }}>
                  Danny Egg (Executive)
                </p>
              </FooterBox>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Text3>Nulla tortor dolor</Text3>
              {links.slice(2).map((link,i) =>(
                <Linkyellow key={i}>{link}</Linkyellow>
              ))}
              
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Text3>Etiam mollis ornare</Text3>
              {[...Array(3)].map((e,i)=>(
                <FooterTitle key={i}>
                Aenean cursus tellus mauris, quis consequat mauris dapibus.
                Donec scelerisque porttitor pharetra.
              </FooterTitle>
              ))}
              <FooterButton>
                READ MORE
              </FooterButton>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Text3>Fusce non turpis</Text3>
              <FooterBox2>
                {Images.map((image,i)=>(
                  <FooterImg src={image} key={i} />
                ))}
              </FooterBox2>
              <FooterTitle2>
                Curabitur dui massa, aliquam quis mi sed, tempor vulputate
                tellus. Sed vestibulum non neque.
              </FooterTitle2>
              <FooterButton>
                BROWSE
              </FooterButton>
            </Grid>
          </Grid>
          <p style={{marginTop:5,color:'#999999',fontSize:18,textAlign:'center'}}>
          Copyright 2016 Your Company Name
          </p>
        </Container>
      </BgImg>
    </div>
  );
};

export default footer;
