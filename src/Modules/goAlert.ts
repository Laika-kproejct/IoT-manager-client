import React from 'react';
import { Alert } from 'react-native';

const goAlert = () =>
     Alert.alert(                    // 말그대로 Alert를 띄운다
      "로그인 하시겠습니까?",                    // 첫번째 text: 타이틀 제목
      "로그인",                         // 두번째 text: 그 밑에 작은 제목
      [                              // 버튼 배열
        {
          text: "아니요",                              // 버튼 제목
          onPress: () => console.log("ㄴㄴ"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
          style: "cancel"
        },
        { text: "네", onPress: () => console.log("LogIn") }, //버튼 제목
                                                               // 이벤트 발생시 로그를 찍는다
      ],
      { cancelable: false }
    );

export default goAlert;
