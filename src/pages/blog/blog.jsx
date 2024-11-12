import React from 'react'
import img from "../../assets/tm-blog-img.jpg";
import Main from '../../components/blog/main';
import { BgImg } from '../../components/about/bg-img/styled';
import { Container } from '../../components/container/container';

const blog = () => {
  return (
    <div>
     
      <BgImg  $img={img} />
      <Container>
  <Main/>
      </Container>

    </div>
  )
}

export default blog
