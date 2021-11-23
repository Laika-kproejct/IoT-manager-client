import React from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledText from '../Components/StyledText';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;
const Header = styled.View`
    width: 100%;
    height: 10%;
    background-color: #2058e6; 
    justify-content: center;
    align-items: center;
`;
const Body = styled.View`
    width: 100%;
    height: 80%;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Footer = styled.View`
    width: 100%;
    height: 10%;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const AddButton = styled.TouchableOpacity`

`;

const SesoraddList = () =>{
    return(
        <Footer><StyledText>ㅎㅇㅎㅇ</StyledText></Footer>
    )
};

export default SesoraddList;