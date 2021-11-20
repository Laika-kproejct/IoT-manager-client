import { State } from 'react-native-gesture-handler';
import axios from 'axios';
import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { StyleSheet, View, Text } from 'react-native';
import StyledText from '../Components/StyledText';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import HomeHead from '../Components/HomeHead';
import HomeBody from '../Components/HomeBody';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;
const Header = Styled.View`
  width: 100%;
  height: 10%;
  background-color: #2058e6; 
  justify-content: center;
  align-items: center;
`;
const Body = Styled.View`
  width: 100%;
  height: 80%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Footer = Styled.View`
  width: 100%;
  height: 10%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const AddButton = Styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Label = Styled.Text`
    font-size: 15px;    
    color: white;
`;

const HomeScreen = ({navigation}: {navigation: any}) => {
/*
  const onPressAddButton = () =>{
    navigation.navigate('Add');
  } */

  const [userpage, setPage] = useState('');
  const [usersize, setSize] = useState('');
  //const ApiInstance=axiosApiInstance();

  const SearchAPI = () => {
    axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home",{
    }
    ).then((response: any) => {
      console.log('');
      

    /*
      const accessToken = response.data.list.accessToken;
      const refreshToken = response.data.list.refreshToken;
            //토큰을 별도 저장
            //홈화면으로 이동
      console.log(accessToken);
      console.log(refreshToken);*/
        /*
      usersize.map((list : any) => (
        (list.homeId < 10) ? (
            <Label key={list.homeId}>
                {list.address}
            </Label>)
        : null
    ))*/
    
      

  }).catch((error: any) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      if(error.response.status === 400) {
      console.log('.');
      }                  
      if(error.response.status === 404) {
          console.log("실패");
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
}/*
  if(usersize.length > 0) {
  return (
      usersize.map((list : any) => (
          (list.homeId < 10) ? (
              <Label key={list.homeId}>
                  {list.address}
              </Label>)
          : null
      ))
    );
  }
  else{ */   
  return (
    <View style={styles.container}>
        <Text style={styles.title}>관리대상자 목록</Text>
        <HomeHead navigation={undefined} />
        <HomeBody />
    </View>
    /*
    <Container>
      <Header>
        <Label>관리대상자</Label>
      </Header>
      <Body>   
      <AddButton onPress={() => {
            SearchAPI();
          }}>
            <StyledText>추가</StyledText>
      </AddButton>      
      </Body>
      <Footer>
      <AddButton onPress={() => {
            onPressAddButton();
          }}>
            <StyledText>추가</StyledText>
          </AddButton>
      </Footer>    
    </Container>*/
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 50,
      backgroundColor: "#EEE",
    },
    title: {
      fontWeight: "800",
      fontSize: 30, 
      marginLeft: 20,
      marginBottom: 20,
    }
  });
//};

export default HomeScreen;