import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';

const Container = Styled.view`
    flex: 1;
    justify-content: center;
    align-items: center;

`;
const Header = Styled.view`
    width: 100%;
    height: 10%;
    background-color: #2058e6; 
    justify-content: center;
    align-items: center;
`;
const Body = Styled.view`
    width: 100%;
    height: 80%;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Footer = Styled.view`
    width: 100%;
    height: 10%;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const SesorList = () =>{
    return(
        <Footer></Footer>
    )
};

export default SesorList;