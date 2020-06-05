import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

import { 
    Wrapper, 
    ScrollContainer, 
    Header, 
    BalanceContainer, 
    BalanceTitle, 
    Balance, 
    RightContainer,
} 
from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <Wrapper>
            <ScrollContainer>
                <Header style={{}}>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 600,00</Balance>
                    </BalanceContainer>
                    <RightContainer>
                        <AntDesign name="gift" style={{marginRight: 5}} size={30} color="#10c86e"/>
                        <MaterialCommunityIcons  name="ticket-percent" style={{marginLeft: 5}} 
                        size={24} color="#10c86e" />
                    </RightContainer>
                </Header>

                <Suggestions />
                <Activities />
                <Tips />
                <Banner></Banner>
            </ScrollContainer>
        </Wrapper>
    );
}