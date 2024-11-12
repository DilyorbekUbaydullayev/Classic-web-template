import React from 'react'
import Grid from "@mui/material/Grid";
import {Box } from "@mui/material";
import { cards} from "../../data/data";
import { CardButon, CardImg, CardTitle1, CardTitle2 } from './styled';
const card1 = (props) => {
  let num =props.num
  return (
    <div>
      <Grid
      container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ justifyContent: "center" }}>
            {cards.slice(0,num).map((item, index) => (
              <Grid
                item
                xs={props.xs}
                sm={props.sm}
                md={props.md}
                key={index}
                
              >
                <Box >
                  <CardImg
                  width={"100%"}
                    src={item.img}
                    alt=""
                  />
                  <CardTitle1>
                    Lorem ipsum dolor#{item.num}
                  </CardTitle1>
                  <CardTitle2>
                     Aenean cursus tellus mauris, quis consequat mauris dapibusid. Donec scelerisque porttitor pharetra
                  </CardTitle2>
                  <CardButon>
                    {item.button}
                  </CardButon>
                </Box>
              </Grid>
            ))}
          </Grid>
    </div>
  )
}

export default card1
