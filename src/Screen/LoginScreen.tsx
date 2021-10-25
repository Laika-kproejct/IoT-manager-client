import 'react-native-gesture-handler';
import React, {useState, useEffect, Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    Alert,
    Button,
    StyleSheet
} from 'react-native';

import styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import theme from '../Styles/theme';
import LoginBtn from '../Components/LoginBtn';
import SignUpBtn from '../Components/SignUpBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

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
    const [userPassword, setUserPassword] = useState('');

    const onClickLogin = () => {
        axios.post("http://192.168.0.40:8080/manager/login",{
            email: email,
            password: userPassword
        }).then((response: any)=> {
            const accessToken = response.data.list.accessToken;
            const refreshToken = response.data.list.refreshToken;
            //토큰을 별도 저장
            //홈화면으로 이동
            console.log(accessToken);
        }).catch((error: any) => {
            if (error.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.status === 400) {
                    console.log('Registration Successful. Please Login to proceed');
                }                  
                if(error.response.status === 404) {
                    console.log("로그인 실패");
                }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
            }
		}
        
    });
}
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
                        <TextInput 
                        onChangeText={(email) => setEmail(email)}
                        placeholder={'아이디'}
                        
                        style={{borderColor: 'black', width:'80%', height:55, borderWidth: 1, borderRadius: 35}}/>
                        </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                    <Text><Icon ion-icon name="lock-closed-outline" size={40} color="black"/></Text>
                        <TextInput 
                        onChangeText={(password) => setUserPassword(password)}
                        textContentType="password"
                        placeholder={'패스워드'}
                        style={{borderColor: 'black', width:'80%', height:55, borderWidth: 1, borderRadius: 35}}/>
                        </View>
                    </Content>


                    <Footer>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button}
                        onPress = {()=>{onClickLogin()}}>    
                        <Text style={styles.text}>로그인</Text>
                        </TouchableOpacity>
                        
                        
                        <SignUpBtn/>                        
                    </Footer>            
        </Container>    
    );
}
const styles = StyleSheet.create({

button: {
    flex: 1,
    backgroundColor: "#5279DD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    },
    
    text: {
    color: "#fff"
    }
});

export default LoginScreen;
