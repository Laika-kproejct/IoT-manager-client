import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';
import styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    padding-top: 35px;
    
`;

const Content = styled.View`
    flex: 1;
    justify-Content: center;
`;


const Footer = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
`;

const LoginScreen = ({navigation}: {navigation: any}) => {
    //<View style={styled.Container}>
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onClickLogin = () => {
        axios.post("http://3.36.174.74:8080/manager/login",{
            email: userId, 
            password: userPassword
            
        }).then((response: any)=> {
            const accessToken = response.data.list.accessToken;
            const refreshToken = response.data.list.refreshToken;
            //토큰을 별도 저장
            //홈화면으로 이동
            console.log(accessToken);
            console.log(refreshToken);
            AsyncStorage.setItem('accessToken', accessToken); // 비동기로 처리해도 문제없음
            AsyncStorage.setItem('refreshToken', refreshToken);
            console.log("로그인 성공");

        }).catch((error: any) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                if(error.response.status === 400) {
                console.log('아이디 혹은 비번이 비었습니다.');
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
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', paddingBottom:30}}>
                    <Text style={{fontSize:15}}><Icon ion-icon name="people-outline" size={40} color="black"/></Text>
                        <TextInput 
                        onChangeText={(Id) => setUserId(Id)}
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
                        <TouchableOpacity activeOpacity={0.8} style={styles.button1}
                        
                        onPress = {()=>{ onClickLogin() }}>

                        <Text style={styles.text1}>로그인</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  activeOpacity={0.8} style={styles.button2} onPress={() => {navigation.navigate('SignUp'); }}>
                        <Text style={styles.text2}>회원가입</Text>
                        </TouchableOpacity>                       
                    </Footer>            
        </Container>    
    );
};
const styles = StyleSheet.create({

button1: {
    flex: 1,
    backgroundColor: "#2058e6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    },

    text1: {
    color: "#fff"
    },
button2: {
        flex: 1,
        backgroundColor: "#5279DD",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 10,
        },
    
        text2: {
        color: "#fff"
        }   
});

export default LoginScreen;