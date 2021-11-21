import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeHead from '../Components/HomeHead';
import HomeBody from '../Components/HomeBody';


const Footer = Styled.View`
  width: 100%;
  height: 10%;
  background-color: white;
  justify-content: center;
  align-items: center;
  backgroundColor: #EEE;
`;

const AddButton = Styled.TouchableOpacity`

`;

const HomeScreen = ({navigation}:{navigation:any}) => {


  return (
    <View style={styles.container}>
        <Text style={styles.title}>관리대상자 목록</Text>
        <HomeHead/>
        <HomeBody/>
        <Footer>
          <AddButton>
            <Icon style={styles.addBtn} size={50}  name='plus-circle'
            onPress={()=>{navigation.navigate('Add')}}></Icon>
          </AddButton>
        </Footer>
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
    },
    addBtn: {
      color: '#4169E1'
  }
});
//};

export default HomeScreen;