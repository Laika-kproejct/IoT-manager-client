import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ImageBackground,
            Image, 
            Alert} from 'react-native';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import messaging from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/messaging';


const Container = Styled.View`    
    justify-content: center;
    align-items: center;
`;
const Body = Styled.View`
    height:70%
    justifyContent: center;
    alignItems: center;
`;
const Footer = Styled.View`
    height: 30%;
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

const MainScreen = ({navigation}:{navigation:any}) => {
    /*

    firebase.initializeApp({
        appId: 'ab',
        apiKey: 'ac',
        projectId: 'as',
        databaseURL: 'ad',
        storageBucket: 'ac',
        messagingSenderId: 'a',
        clientId: 'a',
    });
    
    
    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        
        if (enabled) {
        console.log('Authorization status:', authStatus);
        }
    }

    useEffect(()=>{
        requestUserPermission().then(result=> {
            console.log("요청");
            console.log(result);
        }).catch(error => {
            console.error(error);
        });
    },[]);*/

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