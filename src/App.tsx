import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components/native';


const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {}
const App = ({}: Props) => {
  return (
      <MainText>Hello world</MainText>
  );
};

export default App;