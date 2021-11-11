import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Button,
    Alert

} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../Screen/SignUpScreen';


const SignUpBtn = ({navigation}:{navigation: any}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}
    onPress={() => {
      navigation.navigate('SignUp');
  }}>
      <Text style={styles.text}>회원가입</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  button: {
    flex: 1,
    backgroundColor: "#023e71",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff"
  }
});




export default SignUpBtn;



