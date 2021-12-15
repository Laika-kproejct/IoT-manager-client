import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import StyledText from '../Components/StyledText';
import styled from 'styled-components/native';
import messaging from '@react-native-firebase/messaging';
import { useInterval } from '../Modules/UseInterval';
import { useFocusEffect } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;


const StyledScoll = styled.ScrollView`
  flex-direction: column;
  padding: 0 10px 0 10px;
`;

const Footer = styled.View`
  flex: 0.15;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

const HomeItem = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 10px;
  box-shadow: 3px 3px 3px gray;
  padding: 0 10px 0 10px;
  elevation: 3;
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
  const [isPolling, setPolling] = useState(true);
  
  
      useEffect(()=>{
        onPressRefreshHome();
        refreshFirebaseToken();
      }, []);

      useFocusEffect(
        React.useCallback(()=>{
          // screen is focused
          setPolling(true);
          return () => {
            // screen is unfocused
            setPolling(false);
          };
        },[])
      );

      useInterval(()=>{
        onPressRefreshHome();
      }, isPolling ? 2000 : null);

      useEffect(()=>{
        const list: any = home.map(row => (
          <HomeItem key={row.homeId} style={{backgroundColor: row.notEmpty == true ? 'white' : '#ececec'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Sensor',
                    { homeId: row.homeId });
              }}>
                <View style={{flexDirection: "row"}}>
                  <StyledText fontWeight="700">고유번호 </StyledText><StyledText>{row.homeId}</StyledText>
                </View>
                <View style={{flexDirection: "row"}}>
                  <StyledText fontWeight="700">집 주소 </StyledText><StyledText>{row.address}</StyledText>
                </View>
                <View style={{flexDirection: "row"}}>
                  <StyledText fontWeight="700">감지 시스템 작동 여부 </StyledText><StyledText>{row.notEmpty == true ? "ON" : "OFF"}</StyledText>
                </View>
              </TouchableOpacity>
            </View>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Icon color='#777' size={30} name='delete-outline'/>
              </TouchableOpacity>
          </HomeItem>
        ));
        setHomeList(list);
      }, [home]);

      const onPressRefreshHome = () => {
        console.log("새로고침");
        axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home",{
        params:{
          page: 0, // page는 페이지 번호
          size: 100 //size는 한 페이지에 나오는 아이템 개수, 원래는 인피니티스크롤 적용해야함
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
    const refreshFirebaseToken = () => {
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
    }
      
  return (
    <Container>
        <View style={{flex: 0.15, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: "5%"}}>
          <StyledText size="20px" fontWeight="700">관리대상자 목록</StyledText><TouchableOpacity onPress={()=>{onPressRefreshHome()}}><StyledText>새로고침</StyledText></TouchableOpacity>
        </View>
          <StyledScoll style={{flex: 0.8}}>
            {homeList.length == 0 ? <StyledText>로딩 중</StyledText> : homeList}
          </StyledScoll>
        <Footer>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: "80%", borderRadius: 5, backgroundColor: '#2058e6'}} onPress={()=>{navigation.navigate("Add")}}>
            <StyledText color="white">관리대상자 추가</StyledText>
          </TouchableOpacity>
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

