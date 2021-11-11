import { State } from 'react-native-gesture-handler';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import { NavigationContainer } from '@react-navigation/native';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
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
  height: 90%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const Post = Styled.View`
  justify-content: center;
  border: 2px solid black;
  border-radius: 10px;
  background: white;
  box-shadow: 10px 5px 5px #7f8fa6;
  width: 80%;
  height: 20%;
  margin: 10px;
`;

const PBody = Styled.View`
  height: 80%;
  padding: 11px;
  border-radius: 20px;
`;
const Title = Styled.View`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    font-weight: 600;
`;
  
const AddButton = Styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid gray;
`;

const Label = Styled.Text`
    font-size: 15px;    
    color: white;
`;

const HomeScreen = ({navigation}: {navigation: any}) => { 
  const onPressAddButton = () => {
    navigation.navigate('');
  }
  const request = axios.get("http://192.168.0.40:8080/manager/list/home",
  {params:{pageSize:1, pageNumber:5}
  })
  .then(function (response){
    console.log(response);})
  .catch(function (error){
    console.log(error)
  });
        
  return (
    <Container>
      <Header>
        <Label>관리대상자</Label>
      </Header>
      <Body>
        <AddButton onPress={() => {
            onPressAddButton();
          }}>

          </AddButton>
      </Body>     
    </Container>
  );
};

export default HomeScreen;