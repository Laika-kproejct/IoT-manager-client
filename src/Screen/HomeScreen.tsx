import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import LoginBtn from '../Components/LoginBtn';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

type NavigationProp = StackNavigationProp<HomeScreenStackNaviParamList, 'Modal'>;

interface Props {
  navigation: NavigationProp;
}
const HomeScreen = ({navigation}: Props) => {
  return (
    <Container>
      <Label>This is First Tab</Label>
      <LoginBtn label="Open Modal" onPress={() => navigation.navigate('Modal')} />
      <LoginBtn
        label="Open Full Modal"
        onPress={() => navigation.navigate('FullModal')}
      />
    </Container>
  );
};

export default HomeScreen;