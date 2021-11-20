import 'react-native-gesture-handler';
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

const HomeScreen = () => {


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
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>관리대상자 목록</Text>
        <HomeHead navigation />
        <HomeBody navigation/>
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