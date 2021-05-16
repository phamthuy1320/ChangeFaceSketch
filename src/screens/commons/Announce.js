import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ANNOUNCE} from '../commons/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Announce = (props) =>{
    return (
        props.saved?
        <View style = {styles.container}>
            <StatusBar backgroundColor = {ANNOUNCE.info} />
            <View/>
            <Text style = {styles.text}>{props?.info}</Text>
            <AntDesign name = 'closecircleo' size = {22} color ={ANNOUNCE.text}
                onPress = {props.close}
            />
            <View style = {{marginRight:10}}/>
        </View>:<View/>
    )
}

export default Announce;

const styles = StyleSheet.create({
    container:{
        backgroundColor:ANNOUNCE.info,
        height:50,
        width:'100%',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        position:'absolute',
        flexDirection:'row',
        alignSelf:'center'
    },
    text:{
        flex:1,
        color:ANNOUNCE.text,
        fontSize:15,
        textAlign:'center',
    }
})