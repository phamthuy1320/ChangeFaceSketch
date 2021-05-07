import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HEADER} from '../commons/Colors';

const Header = (props) =>{
    return (
        <View style = {[styles.container,{
            backgroundColor: props?.bgColor||HEADER.background
        }]}>
            {props?.left}
            <Text style = {[styles.text,{color:props?.color||HEADER.text}]}>
                {props.title}
            </Text>
            {props?.right}
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
        flex:1
    },
    text:{
        textAlign:'center'
    }
})