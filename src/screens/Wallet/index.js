import React, {useState} from 'react';
import {
    Feather,
    MaterialCommunityIcons,
    FontAwesome,
    FontAwesome5,
    AntDesign
} from '@expo/vector-icons'

import {Switch} from 'react-native';
import { 
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    CardBody,
    AddButton,
    AddLabel,
    TicketButton,
    TicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleTogleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleTogleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header colors={
                useBalance
                ? ['#52E78C', '#1AB563']
                : ['#D3D3D3', '#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '600,00': '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleTogleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff"></Feather>
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está redendo 100% do CDI
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="square-inc-cash" 
                            size={20} color="#rgba(255, 255, 255, 0.6)" />
                            <ActionLabel>
                                Adicionar
                            </ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" 
                            size={20} color="#rgba(255, 255, 255, 0.6)" />
                            <ActionLabel>
                                Retirar
                            </ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>

                <Switch 
                    value={useBalance}
                    onValueChange={handleTogleUseBalance}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                            </CardTitle>
                            <CardInfo>
                                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain"/>
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <AddLabel>
                            Adicionar cartão de crédito
                        </AddLabel>
                    </AddButton>
                </Card>

                <TicketButton>
                <MaterialCommunityIcons name="ticket-outline" size={24} color="#0DB060" />

                    <TicketLabel>
                        Usar código promocional
                    </TicketLabel>
                </TicketButton>
            </PaymentMethods>
        </Wrapper>
    )
}