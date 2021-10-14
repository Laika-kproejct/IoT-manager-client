import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import theme from '../Styles/theme';
import LoginBtn from '../Components/LoginBtn';
import SignUpBtn from '../Components/SignUpBtn';
import Icon from 'react-native-vector-icons/Ionicons';

interface EmailBoxProps{
    val: string;
    length: number;
}

const Container = styled.View`
    flex: 1;
    padding: 10px;
    background-color: white;
`;

const Header = styled.View`
    width: 100%;
    height: 15%;
`;


const Title = styled.View`
    width: 100%;
    height: 20%;
    paddingTop: 35
    
`;

const Content = styled.View`
    flex: 1;
    justify-Content: center;
`;

/*
const InputID = styled.TextInput`
    backgroundColor: ${theme.colors.backgroundMainColor};
    borderRadius: 30px;
    width: 70%;
    height: 35;
    marginBottom: 10px;
    alignItems: center;
`;
*/
const Footer = styled.View`
    width: 100%;
    height: 20%;
    justify-Content: center;
`;
/*
const BtnClick = styled.TouchableOpacity`
    width: 90px;
    borderRadius: 20px;
    height: 30px;
    alignItems: center;
    justify-Content: center;
    backgroundColor: ${theme.colors.backgroundMainColor};
`;*/

const LoginScreen = () => {
    //<View style={styled.Container}>
    const [email, setEmail] = useState("");
    return(
        <Container>
            <Header>
                
                <ImageBackground 
            	style={{ width: "50%", height: "70%" }}  //View를 꽉채우도록
                source={require("../images/logo.png")}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
            </ImageBackground>
                
            </Header>
            <Title>
                <StyledText fontWeight="700" size="50px" center>로그인</StyledText>
                </Title>    
                    <Content>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
                    paddingBottom:30}}>
                    <Text style={{fontSize:15}}><Icon ion-icon name="people-outline" size={40} color="black" /></Text>
                        <TextInput style={{borderColor: 'black', width:'80%', height:55, borderWidth: 1, borderRadius: 35}}/>
                        </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                    <Text><Icon ion-icon name="lock-closed-outline" size={40} color="black"/></Text>
                        <TextInput style={{borderColor: 'black', width:'80%', height:55, borderWidth: 1, borderRadius: 35}}/>
                        </View>
                    </Content>
                    <Footer>
                        <LoginBtn/>
                        <SignUpBtn/>                        
                    </Footer>            
        </Container>    
    );
};

export default LoginScreen;
