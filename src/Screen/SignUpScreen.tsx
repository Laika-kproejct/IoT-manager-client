import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, Text, TextInput } from 'react-native';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Header = Styled.View`
  width: 100%;
  height: 15%;
`;
const Body = Styled.View`
    flex: 1;
    width: 80%;
    justify-Content: center;
`;

const Footer = Styled.View`
    width: 100%;
    height: 10%;
    justify-Content: center;
    align-items: center;
    background-color: #5279DD;
    color: white;
`;

const SignUpScreen = ({navigation}: {navigation: any}) => {
  
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  //"http://192.168.0.40:8080/manager/login"

  const onClickSignUp = () => {
  axios.post("http://3.36.174.74:8080/manager/register",{
    Id: userId,
    password: userPassword,
    name: userName
}).then((response: any) => {
    const accessToken = response.data.list.accessToken;
    const refreshToken = response.data.list.refreshToken;

    console.log(refreshToken);
    console.log(accessToken);
    AsyncStorage.setItem('accessToken', accessToken);
    AsyncStorage.setItem('refreshToken', refreshToken);
    navigation.navigate('Login');
    console.log('회원가입 성공');
    //토큰을 별도 저장
    //홈화면으로 이동
}).catch((error: any) => {
    if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        if(error.response.status === 400) {
          console.log('Registration Successful. Please Login to proceed'); //수정
        }     
        if(error.response.status === 404) {
            console.log("회원가입 실패");
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
  return (
    <Container>
      <Header>
      <ImageBackground
      style={{ width: "50%", height: "70%" }}  
      source={require("../images/logo.png")}  
      resizeMode="cover">

      </ImageBackground>
      </Header>
      <Body>
        <TextInput
          placeholder={'이름'}
          returnKeyType="next" //키보드 타입 next 설정하기
          blurOnSubmit={true}
          style={{borderColor: 'gray', width:'100%', height:35, borderWidth: 2, borderRadius: 5, padding:5, fontSize:15, marginBottom:10}}>
        </TextInput>
        <TextInput
          placeholder={'아이디(5자 이상, 영문, 숫자)'}
          returnKeyType="next"
          blurOnSubmit={false}
          style={{borderColor: 'black', width:'100%', height:35, borderWidth: 1, borderRadius: 5, padding:5,fontSize:15, marginBottom:10}}
          >
        </TextInput>
        <TextInput
          placeholder={'비밀번호(8자 이상)'}
          returnKeyType="next"
          blurOnSubmit={false}
          style={{borderColor: 'black' , width:'100%', height:35, borderWidth: 1, borderRadius: 5, padding:5,fontSize:15, marginBottom:10}}
          >
        </TextInput>
        <TextInput
          placeholder={'비밀번호 확인'}
          returnKeyType="next"
          blurOnSubmit={false}
          style={{borderColor: 'black', width:'100%', height:35, borderWidth: 1, borderRadius: 5, padding:5, fontSize:15, marginBottom:10}}>
        </TextInput>
      </Body>
      <Footer>
        <TouchableOpacity onPress={ () =>{ onClickSignUp() }}>
          <StyledText color="white">회원가입</StyledText>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default SignUpScreen;