import React from 'react';
import { ImageBackground, Image } from 'react-native';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';

const Container = Styled.View`    
    justify-content: center;
    align-items: center;
`;
const Body = Styled.View`
    height:80%
    justifyContent: center;
    alignItems: center;
`;
const Footer = Styled.View`
    height: 20%;
    width:100%;
    justifyContent: center;
    alignItems: center;
`;

const Touch =Styled.TouchableOpacity`
    width:80%
    height:20%
    backgroundColor: #5279DD;
    justifyContent: center;
    alignItems: center;
    marginBottom: 10;
    borderRadius: 10;
`;
const Label = Styled.Text``;

const MainScreen = ({navigation}:{navigation: any}) => {

    return(
        <Container>
        <Body>
        <Image source={require("../images/IconB.png")}/>
        </Body>
        <Footer>
        <Touch onPress={() => {
            navigation.navigate('Login');
        }}>
        <StyledText color="white">기존 계정 로그인</StyledText>
        </Touch>
        <Touch onPress={() => {
            navigation.navigate('SignUp');
        }}>
        <StyledText color="white">새로운 계정 만들기</StyledText>
        </Touch>
        </Footer>
        </Container>
    );
};

export default MainScreen;