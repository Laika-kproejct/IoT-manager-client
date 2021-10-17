import { TextInput } from 'react-native-gesture-handler';
import { placeholder } from '@babel/types';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import theme from '../Styles/theme';
import StyledText from './StyledText';

interface EmailBoxProps{
    val: string;
    length: number;
}

/*
const Content = styled.View`
    flex: 1;
    padding: 10px;
`;
*/
const InputID = styled.TextInput`
    backgroundColor: ${theme.colors.backgroundMainColor};
    borderRadius: 30px;
    width: 500px;
    height: 45px;
    marginBottom: 10px;
    alignItems: center;
`;


const EmailBox = () => {
    const [email, setEmail] = useState("");
    return(
        
            <InputID>
            <TextInput
            placeholder="아이디"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}></TextInput>
            </InputID>
        

    );
}

export default EmailBox;