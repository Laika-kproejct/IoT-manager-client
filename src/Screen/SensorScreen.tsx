import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import { axiosApiInstance } from '../Modules/axiosApiInstance';

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
  border-bottomColor: #bbb;
`;

const Footer = Styled.View`
  width: 100%;
  height: 10%;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: #EEE;
`;

export interface PostType2 {
	
	page: number; // page는 페이지 번호
	size: number;
  sensorid: number;
  token?: string;
  list?:number;
  
}
const SensorScreen = () => {
  const [sensor, setSensor] = useState<PostType2[]>([]);
    //const SearchAPI = () => {
      
        axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home/"+1+"/sensor",{
          params:{
	          page: 0, // page는 페이지 번호
	          size: 3 //size는 한 페이지에 나오는 아이템 개수
          }
      
        }).then((response: any) => {
        console.log(response.data);
        //console.log(response.data.list.content);
        //setSensor(response.data.list.sensorid);
        const slist = response.data.list.content;
          
        }).catch((error: any) => {
        if (error.response) {
        console.log(error.response.data);
    
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

  return (
    <Container>
      <Header>센서 목록</Header>
        <Content>
        <ScrollView>
            {sensor.map(row => (
            <List>
              <Text>
                {row.sensorid}
              </Text>
            </List>
              ))}
        </ScrollView>
        </Content>
        <Footer/>
    </Container>
  );
};

export default SensorScreen;