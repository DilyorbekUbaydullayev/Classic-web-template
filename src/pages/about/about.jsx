import React from 'react'
import Title1 from '../../components/about/title1/title1';
import Title2 from '../../components/about/title2/title2';
import Title3 from '../../components/about/title3/title3';
import img from "../../assets/tm-about-img.jpg";
import { BgImg } from '../../components/about/bg-img/styled';
import { Container } from '../../components/container/container';
const about = () => {
  return (
    <div>
      <BgImg $img={img}/>
      <Container>
      <Title1/>
   <Title2/>
   <div style={{marginTop:50}}>
   <Title3 />
   </div>
      </Container>
     
  
    </div>
  )

}

export default about
