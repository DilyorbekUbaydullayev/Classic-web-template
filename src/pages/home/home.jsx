import React from "react";
import Headerimg from "../../components/home/headerImg/header-img";
import HomeCards from "../../components/home/homeCards/home-cards";
import { Container } from "../../components/container/container";
const home = () => {
  return (
    <div>
      
      <Headerimg />
     <Container>
     <HomeCards />
     </Container>
    </div>
  );
};

export default home;
