import 'react-native-gesture-handler';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import axios from 'axios';
import { axiosApiInstance } from '../Modules/axiosApiInstance';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #FFF;
    border-radius: 10;
    
`;
const Header = styled.Text`
    font-weight: 800;
    font-size: 30;
    margin-left: 20;
    margin-bottom: 20;
    align-items: center;
`;
const Body = styled.View`
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
`;
const Footer = styled.View`
    width: 100%;
    height: 15%;
    justify-content: center;
    align-items: center;
`;
const Input = styled.TextInput`
    border-color: black;
    width: 90%; 
    height: 45; 
    border-width: 0.5;
    margin-bottom: 15;
    border-radius: 10;
    
`;
const Btn = styled.TouchableOpacity`
    width: 90%;
    height: 40%;
    background-color: #5279DD;
    justify-content: center;
    align-items: center;
    margin-bottom: 10;
    border-radius: 5;
`;


const ListAddScreen = ({navigation}:{navigation:any}) =>{

    const [useraddress, setUserAddress] = useState('');
    const [username, setUserName] = useState('');

    const onClickregister = () => {
        /*
        Alert.alert("등록 하시겠습니까?",                    // 첫번째 text: 타이틀 제목
                    "등록",                         // 두번째 text: 그 밑에 작은 제목
        [                              // 버튼 배열
        {
            text: "아니요",                              // 버튼 제목
            onPress: () => console.log("ㄴㄴ"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
            style: "cancel"
        },
          { text: "네", onPress: () => console.log("등록 대기") }, //버튼 제목
                                                                 // 이벤트 발생시 로그를 찍는다
        ],
        { cancelable: false }
        );*/
        axiosApiInstance.post("http://3.36.174.74:8080/manager/register/home",{
            address: useraddress,
            personList: username
        }).then((response: any) => {
            console.log(response.data);
            console.log("등록 성공");
            navigation.goBack();
        }).catch((error: any) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                if(error.response.status === 400) {
                console.log('입력 오류');
                }                  
                if(error.response.status === 404) {
                    console.log("등록 실패");
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
            <Header>관리대상자 등록하기</Header>
            <Body>
                <Input placeholder={'주소 입력'}
                onChangeText={(address) => setUserAddress(address)}/>
                <Input placeholder={'이름 입력'}
                onChangeText={(personList) => setUserName(personList)}/>
            </Body>

            <Footer>
                <Btn onPress={()=>{onClickregister()}}>
                    <StyledText color="white">확인</StyledText>
                </Btn>
                <Btn onPress={()=>{navigation.goBack();}}>
                    <StyledText color="white">취소</StyledText>
                </Btn>
            </Footer>
        </Container>
    );

};

export default ListAddScreen;
