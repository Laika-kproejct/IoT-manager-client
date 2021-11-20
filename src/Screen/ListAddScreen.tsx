import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import axios from 'axios';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-vertical: 5;
    margin-horizontal: 20;
    padding: 10px;
    background-color: lightgray;
    border-radius: 10;
`;
const Body = styled.View`
    width: 100%;
    height: 80%;
    justifyContent: center;
    alignItems: center;
`;
const Footer = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;
const Input = styled.TextInput`
    border-color: black;
    width: 90%; 
    height: 45; 
    border-width: 1;
    
`;
const Btn = styled.TouchableOpacity`
    width: 80%;
    height: 40%;
    background-color: #5279DD;
    justify-content: center;
    align-items: center;
    margin-bottom: 10;
    border-radius: 5;
`;


const ListAddScreen = () =>{
    

    return(
        <Container>
        <Body>
        <Input placeholder={'주소 입력'}/>
        </Body>
        <Footer>
        <Btn>
            <StyledText color="white">등록</StyledText>
        </Btn>
        </Footer>
        </Container>
    );
}

export default ListAddScreen;