import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
//import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosApiInstance } from '../Modules/axiosApiInstance';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export interface PostType {
	content?: string;
	homeId?: number;
	address?: string;
	personList: string;
    page:number;
    size:number;
}

const HomeBody = ({navigation}:{navigation:any}) => {
    const [home, setHome] = useState<PostType[]>([]);
    //const SearchAPI = () => {
        axiosApiInstance.get("http://3.36.174.74:8080/manager/list/home",{
            
        }).then((response: any) => {
        
        //console.log(response.status);
        //console.log(response.config);
        //console.log(response.data.list.content);
        setHome(response.data.list.content);
            
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
    //} 
        return (
            
            <View style={styles.container}>
                <ScrollView>
                {home.map(content =>(
                        <View style={styles.todo}>
                            <View style={styles.todoText}>
                                <TouchableOpacity style={styles.todoCheckbox}>
                                </TouchableOpacity>
                                <Text key = {content.page}>
                                {content.address}
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Icon style={styles.todoDelBtn} size={30} name='delete-outline' 
                                />
                            </TouchableOpacity>
                            
                        </View>
                    ))}
                    </ScrollView>
                
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
        marginRight: 5,
    },
    todoText: {
        flexDirection: 'row',
        fontSize: 10,
    },
    todoDelBtn: {
        color: '#777'
    }
});

export default HomeBody;