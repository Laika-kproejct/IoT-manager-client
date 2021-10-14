import 'react-native-gesture-handler';
import React  from 'react';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components/native';

//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const container = styled.View`
        flex: 1;
        padding: wp('5%');
        backgroundColor: 'white';`

const wrapContent= styled.View`
        width: wp('90%');
        height: wp('90%');
        paddingBottom: wp('5%');`
        

const content = styled.View`
        width: "100%";
        height: "100%";
        backgroundColor: "#46c3ad";`

const HomeScreen = () =>  {

        return (
        
        <ScrollView>

        </ScrollView>
        
        
        );
}


//const styles = StyleSheet.create({
        

export default HomeScreen;