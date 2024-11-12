import styled from "styled-components";
import Home from "../assets/home.jpg";
export const Bg = styled.div`
background-image: url(${Home});
background-repeat: no-repeat;
background-size: auto;
background-position: center;
height: 500px;

@media (max-width: 992px) {
  background: none;
  height: auto;
}
`;
export const StyledImg = styled.img`
  display: none;

  @media (max-width: 992px) {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export const Title1 = styled.div`
 font-size:25.5px;
  text-align: center;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  fony-weight:400;
 margin-top:90px;
 padding-inline: 180px;
 @media (max-width: 992px){
   padding-inline: 10px;
   
 }
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 35px;
  color: #8c8c8c;
  margin-bottom: 2;
  margin-top: 4;
`;
export const Link= styled.a`
font-size:20px;
font-weight: 100;
display: inline-block;
margin-bottom:-18px;
color:#006699;
text-decoration: underline 1px solid;

&:hover{
color:#006699;
text-decoration: none;
}
`
export const Linkyellow = styled.a`
font-size:16px;
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
font-weight: 100;
display: inline-block;
margin-top:5px;
margin-bottom:22px;
color:#CCCC66;
text-decoration: underline 1px solid;

&:hover{
color:#CCCC66;
text-decoration: none;
}
`
export const Text3 = styled.h3`
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 26px;
  font-weight: 300;
  color:#cc9900;
  margin-bottom:30px
`
export const Button2 = styled.button`
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px 28px;
  color: #fff;
  fontSize: 18px;
  fontWeight: 300;
  backgroundColor: #666666;
  &:hover {
    backgroundColor: #515050;
    color: white;
  }
`;
export const Inputs=styled.input`
font-size:18px;
 padding:16px;
 &:focus{
   border:1px solid #cc6600;
 }
 outline-style:none;
 border:1px solid #8c8c8c;
`
