import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import StyledText from '../Components/StyledText';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

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
const AddButton = Styled.TouchableOpacity`

`;
const SensorItem = styled.View`
  width: 100%;
  height: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 10px;
`;
export interface PostType2 {
	
	page: number; // page는 페이지 번호
	size: number;
  sensorid: number;
  token?: string;
  type?:number;
  timestamp?:string|number;
  homeId?:number;
}
export const SensorScreen = (props: any) => {
  const {navigation, route} = props;
  const [sensor, setSensor] = useState<PostType2[]>([]);
  const [sensorList, setSensorList] = useState([]);
  //const SearchAPI = () => {
  const {homeId} = route.params;
  useEffect(() => {
    axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home/"+homeId+"/sensor",{  
          
        }).then((response: any) => {
        console.log(response.data.list.content);
        setSensor(response.data.list.content);  
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
  }, []);
  useEffect(() => {
    const list: any = sensor.map(row => (
      <SensorItem key={row.sensorid}>
        <View style={{flex: 0.9}}>
          <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center"}} onPress={()=>{
                navigation.navigate('Sensor',{homeId:row.homeId});
          }}>
            <View style={{flexDirection: "row"}}>
              <StyledText fontWeight="700">ID </StyledText><StyledText>{row.sensorid}</StyledText>
            </View>
            <View style={{flexDirection: "row"}}>
              <StyledText fontWeight="700">시간 </StyledText><StyledText>{row.timestamp}</StyledText>
            </View>
            <View style={{flexDirection: "row"}}>
              <StyledText fontWeight="700">타입 </StyledText><StyledText>{row.type}</StyledText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
          <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: 'center'}}>
            <Icon color='#777' size={30} name='delete-outline'/>
          </TouchableOpacity>
        </View>
      </SensorItem>
    ));
      setSensorList(list);
  }, [sensor]);
  return (
    <Container>
      <Header>센서 목록</Header>
        <Content>
        <ScrollView>
            {sensorList.length == 0 ? <StyledText>센서 리스트가 비었습니다.</StyledText> : sensorList}
        </ScrollView>
        </Content>
        <Footer>
        <AddButton>
            <Icon color="blue" size={30} name='plus-circle'
            onPress={()=>{navigation.navigate('SensorToken')}}></Icon>
          </AddButton>
          <AddButton>
            <Icon color="blue" size={30} name='plus-circle'
            onPress={()=>{navigation.navigate('Add')}}></Icon>
          </AddButton>
          </Footer>
    </Container>
  );
};

export default SensorScreen;