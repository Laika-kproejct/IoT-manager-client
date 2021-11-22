import 'react-native-gesture-handler';
import React from 'react';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import { Text } from 'react-native-paper';

const SensorToken = () =>{
    axiosApiInstance.get("http://3.36.174.74:8080/sensor/update",{
        
    }).then((response: any) => {
        console.log(response.data);
        //console.log(response.data.list.content);
        //setSensor(response.data.list.sensorid);
        //const slist = response.data.list.content;

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

    return(
        <Text>센서 토큰 갱신</Text>
    );
};

export default SensorToken;