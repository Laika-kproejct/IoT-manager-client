import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyledText from '../Components/StyledText';
import PropTypes from 'prop-types';

const Container = Styled.View`
  flex: 1;
  flexDirection: column;
  padding-top: 50;
  background-color: #EEE;

`;
const Header = Styled.Text`
  font-weight: 800;
  font-size: 30;
  margin-left: 20;
  margin-bottom: 20;
`;

const Content = Styled.View`
  flex: 1;
  margin-vertical: 5;
  margin-horizontal: 20;
  padding: 10px;
  background-color: #FFF;
  border-radius: 10;
`;

const List = Styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  height: 50;
`;

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

export interface PostType {
	content?: string;
	homeId?: number;
	address?: string;
	personList: string;
  page:number;
  size:number;
}
export interface props{
  params?:number|string;
}

export const HomeScreen = ({navigation}:{navigation:any}, props:any) => {

  const {homeId} = props.route.params;
  const [home, setHome] = useState<PostType[]>([]);
  //const [idhome, setIdhome] = useState('');
      
      axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home",{
        params:{
          
          page: 1, // page는 페이지 번호
          size: 5 //size는 한 페이지에 나오는 아이템 개수
        }
      }).then((response: any) => {
      //console.log(response.status);
      //console.log(response.config);
      //console.log(response.data.list.content);
      setHome(response.data.list.content);
      //console.log(response.data.list.content);
      
      }).catch((error: any) => {
      if (error.response) {
      console.log(error.response.data);
      
      if(error.response.status === 400) {
      console.log('요청이 잘못됐습니다');
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
      
  return (
    <Container>
        <Header>관리대상자 목록</Header>
        <Content>
        {home.map(row => (
        <ScrollView>
          <List>
            <StyledText size="12px">
            {row.address},{row.homeId}
            </StyledText>
              <AddButton>
                <Icon color='#777' size={30} name='delete-outline'
                onPress={()=>{
                  props.navigation.navigate('Sensor',{

                  homeId:{homeId}
                  
                })
                }}
              />
              </AddButton>
          </List>
        </ScrollView>
        ))}
        </Content>
        <Footer>
          <AddButton>
            <Icon style={styles.addBtn} size={50}  name='plus-circle'
            onPress={()=>{navigation.navigate('Add')}}></Icon>
          </AddButton>
        </Footer>
        </Container>
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