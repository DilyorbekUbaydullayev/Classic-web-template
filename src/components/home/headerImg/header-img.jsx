import React from "react";
import img from "../../../assets/home.jpg";
import { Bg,StyledImg,Title1 } from "../../../styles/styles";
import { H2, P } from "./styled";
const HeaderImg = () => {
  return (
    <>
      <Bg>
        <StyledImg src={img} alt="" />
      </Bg>
      <Title1>
        <H2 >Introduction</H2>
        <P >
          Suspendisse ut magna vel velit cursus tempor ut nec nunc. Mauris
          vehicula, augue in tincidunt porta, purus ipsum blandit massa.
        </P>
      </Title1>
    </>
  );
};

export default HeaderImg;
