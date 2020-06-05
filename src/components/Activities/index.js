import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import {Text, StyleSheet} from 'react-native';
import {Container,
     Header,
     Title,
     AlignLeft,
     Card,
     CardHeader,
     Avatar,
     Description,
     Bold,
     CardBody,
     UserName,
     CardFooter,
     Details,
     Value,
     Divider,
     Date,
     Option,
     Actions,
     OptionLabel,
    } from './styles';

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>
                    Atividades
                </Title>
                <AlignLeft>
                    <Text style={styles.menuActive}>Todas</Text>
                    <Text style={styles.menuInative}>Minhas</Text>
                </AlignLeft>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@danielsilva</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Ermeson Silva</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 19,83</Value>

                        <Divider />
                        <Feather name="lock" size={14} color="#fff" />
                        <Date>há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}


const styles = StyleSheet.create({
    menuActive: {
        color: '#10c86e',
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#10c86e',
    },
    menuInative: {
        color: '#fff',
        padding: 5,
        marginLeft: 5,
        borderBottomWidth: 2,
    }
});
