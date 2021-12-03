import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyledText from '../Components/StyledText';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import messaging from '@react-native-firebase/messaging';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #EEE;

`;

const BodyWrapper = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #FFF;
  border-radius: 10;
  margin: 0 10px 0 10px;
`;


const StyledScoll = styled.ScrollView`
  flex-direction: column;
`;

const Footer = styled.View`
  flex: 0.1;
  width: 100%;
  height: 10%;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: #EEE;
`;

const AddButton = styled.TouchableOpacity`

`;

const HomeItem = styled.View`
  width: 100%;
  height: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export interface HomeResponseType {
	homeId?: number;
	address?: string;
	personList?: [];
  notEmpty?: boolean;
}
export interface props{
  params?:number|string;
}

export const HomeScreen = (props:any) => {
  
  const {navigation} = props;
  const [home, setHome] = useState<HomeResponseType[]>([]);
  const [homeList, setHomeList] = useState([]);
  
      
      useEffect(()=>{
        onPressRefreshHome();
        messaging().getToken().then((response: any) => {

          console.log(response);
          axiosApiInstance.post("http://3.36.174.74:8080/manager/fcm/refresh",{
          token: response
          })
          console.log('갱신 완료');
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
      }, []);

      useEffect(()=>{
        const list: any = home.map(row => (
          <HomeItem key={row.homeId}>
            <View style={{flex: 0.9}}>
              <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center"}} 
              onPress={()=>{navigation.navigate('Sensor',
              {homeId:row.homeId})
              }}>
                <View style={{flexDirection: "row"}}>
                  <StyledText fontWeight="700">ID </StyledText><StyledText>{row.homeId}</StyledText>
                </View>
                <View style={{flexDirection: "row"}}>
                  <StyledText fontWeight="700">주소 </StyledText><StyledText>{row.address}</StyledText>
                </View>
                <View style={{flexDirection: "row"}}>
                  <StyledText fontWeight="700">감지 시스템 작동 여부 </StyledText><StyledText>{row.notEmpty == true ? "ON" : "OFF"}</StyledText>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.1}}>
              <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: 'center'}}>
                <Icon color='#777' size={30} name='delete-outline'/>
              </TouchableOpacity>
            </View>
          </HomeItem>
        ));
        setHomeList(list);
      }, [home]);

      const onPressRefreshHome = () => {
        console.log("새로고침");
        axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home",{
        params:{
          
          page: 0, // page는 페이지 번호
          size: 5 //size는 한 페이지에 나오는 아이템 개수
        }
      }).then((response: any) => {
      setHome(response.data.list.content);
      console.log(response.data.list.content);
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
      }
      
  return (
    <Container>
        <View style={{flex: 0.15, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: "5%"}}>
          <StyledText size="20px" fontWeight="700">관리대상자 목록</StyledText><TouchableOpacity onPress={()=>{onPressRefreshHome()}}><StyledText>새로고침</StyledText></TouchableOpacity>
        </View>
        <BodyWrapper>
          <StyledScoll>
          {homeList}
          </StyledScoll>
        </BodyWrapper>
        <Footer>
          <AddButton>
            <Icon style={styles.addBtn} size={50}  name='plus-circle'
            onPress={()=>{navigation.navigate('Add')}}></Icon>
          </AddButton>
        </Footer>
        </Container>
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