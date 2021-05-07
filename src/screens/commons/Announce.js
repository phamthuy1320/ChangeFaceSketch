import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ANNOUNCE} from '../commons/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Announce = (props) =>{
    return (
        props.saved?
        <View style = {styles.container}>
            <View/>
            <Text style = {styles.text}>{props?.info}</Text>
            <AntDesign name = 'close' size = {22} color ={ANNOUNCE.text}
                onPress = {props.close}
            />
        </View>:<View/>
    )
}

export default Announce;

const styles = StyleSheet.create({
    container:{
        backgroundColor:ANNOUNCE.info,
        height:90,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:ANNOUNCE.text,
        justifyContent:'space-around',
        // alignContent:'center',
        position:'absolute',
        flexDirection:'row',
    },
    text:{
        color:ANNOUNCE.text,
        fontSize:15,
        textAlign:'center',
    },
    botton_box:{
        flex:1,
        flexDirection:'row',
    }
})