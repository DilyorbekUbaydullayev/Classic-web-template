import React from 'react'
import img from "../../assets/tm-contact-img.jpg";
import ContactBody from '../../components/contact/contact-body';
import { BgImg } from '../../components/about/bg-img/styled';
import { Container } from '../../components/container/container';

const contact = () => {
  return (
    <div>
      
      <BgImg $img={img}/>
    <Container>
      <ContactBody/>
    </Container>
    </div>
  )
}

export default contact
