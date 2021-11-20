import React, { Component } from 'react';
//import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeBody = () => {
    
    
        return (
            <View style={styles.container}>
                
                    
                        <View style={styles.todo}>
                            <View style={styles.todoText}>
                                <TouchableOpacity style={styles.todoCheckbox}>
                                </TouchableOpacity>
                                <Text></Text>
                            </View>
                            <TouchableOpacity>
                                <Icon style={styles.todoDelBtn} size={30} name='delete-outline' />
                            </TouchableOpacity>
                        </View>
                    
                
            </View>
        )
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
    },
    todoDelBtn: {
        color: '#777'
    }
});

export default HomeBody;