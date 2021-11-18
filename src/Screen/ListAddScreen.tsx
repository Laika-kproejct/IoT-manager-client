import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components/native';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const Label = styled.Text`
    font-size: 15px;    
    color: white;
`;

const ListAddScreen = () =>{

    return(
        <Container>
        <Label>관리대상자 추가</Label>
        </Container>
    );
}

export default ListAddScreen;