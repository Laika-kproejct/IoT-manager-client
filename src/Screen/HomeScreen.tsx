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
  const onPressAddButton = () => {
    navigation.navigate('Add');
  }
  const getDataUsingSimpleGetCall = () =>
  axios.get("http://3.36.174.74:8080/manager/list/home",
      {params:{pageSize:1, pageNumber:5}
      })
  .then(function (request){
    console.log(request);
  })
  .catch(function (error){
    console.log(error)
  });
        
  return (
    <Container>
      <Header>
        <Label>관리대상자</Label>
      </Header>
      <Body>
      </Body>
      <Footer>
      <AddButton onPress={() => {
            onPressAddButton();
          }}>
            <StyledText>추가</StyledText>
          </AddButton>
      </Footer>    
    </Container>
  );
};

export default HomeScreen;