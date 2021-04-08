import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ANNOUNCE} from '../commons/Colors';

const Announce = (props) =>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{props?.info}</Text>
        </View>
    )
}

export default Announce;

const styles = StyleSheet.create({
    container:{
        backgroundColor:ANNOUNCE.info,
        height:70,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:ANNOUNCE.text,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        position:'absolute',
    },
    text:{
        color:ANNOUNCE.text,
        fontSize:15,
        textAlign:'center'
    },
    botton_box:{
        flex:1,
        flexDirection:'row',
    }
})