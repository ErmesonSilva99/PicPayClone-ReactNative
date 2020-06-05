import React from "react";

import { Container, Img, Details, Title, Description } from './styles';

import img13 from '../../images/13.png'

export default function Banner() {
    return (
        <Container>
           <Details>
                <Title>Cobre um amigo</Title>

                <Description>Mantenha sua parcerias em dias, use o PicPay para fazer suas cobranças</Description>
           </Details>
           <Img source={img13} />
        </Container>
    );
}