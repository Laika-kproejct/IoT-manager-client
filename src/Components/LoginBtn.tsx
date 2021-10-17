import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  

} from 'react-native';




const LoginBtn = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.text}>로그인</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  button: {
    flex: 1,
    backgroundColor: "#5279DD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff"
  }
});




export default LoginBtn;



/*
import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import StyledText from './StyledText';
import theme from '../Styles/theme';

const BtnClick = styled.TouchableOpacity`
  width: 90px;
  borderRadius: 20px;
  height: 30px;
  alignItems: center;
  justify-Content: center;
  backgroundColor: ${theme.colors.backgroundMainColor};
`;

const LoginBtn = () => {
  return(
    <BtnClick>
      <TouchableOpacity>
      <StyledText color="white" size="15px">
        로그인</StyledText>
      <StyledText color="white" size="15px">
        회원가입</StyledText>
        </TouchableOpacity>
    </BtnClick>
    
  );
  
}

export default LoginBtn;
*/