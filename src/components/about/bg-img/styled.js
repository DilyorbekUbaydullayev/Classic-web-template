import styled from "styled-components";
export const BgImg = styled.div`
  background-image: ${({ $img }) => `url(${$img})`}; // URL ichida qavs ichida yoziladi
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  height: 200px;
`;