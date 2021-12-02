import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ImageBackground,
            Image, 
            Alert} from 'react-native';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import messaging from '@react-native-firebase/messaging';


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
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log('Message handled in the background!', remoteMessage);
        //  여기에 로직을 작성한다.
        //  remoteMessage.data로 메세지에 접근가능
        //  remoteMessage.from 으로 topic name 또는 message identifier
        //  remoteMessage.messageId 는 메시지 고유값 id
        //  remoteMessage.notification 메시지와 함께 보내진 추가 데이터
        //  remoteMessage.sentTime 보낸시간
        });
        // Foreground 상태인 경우
        React.useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
        return unsubscribe;
        });

    
    
    /*
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