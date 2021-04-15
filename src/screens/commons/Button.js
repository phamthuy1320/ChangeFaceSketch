import React from 'react';
import {View,TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BUTTON} from './Colors';
const Button = (props) =>{
    return (
    <View>
        <TouchableOpacity style = {styles.button} {...props}>
            {props?.icon}
        </TouchableOpacity>
        <Text style = {styles.title}>{props.title}</Text>
    </View>
    )
}

const ButtonRect = (props) =>{
    return (
        <TouchableOpacity style = {[
            styles.buttonRect,{
                backgroundColor:props?.color||"#a5dede",
                flexDirection:props.row?'row':'column'
            }]} {...props}>
            {props?.icon}
            {props.title?
            <Text 
                style = {[styles.title,{fontSize:props?.size||22,
                    color:props?.colorText||'#fff',
                }
                ]}
                
            >{props.title}</Text>:null}
            {props.row?(props?.rightIcon||<View/>):null}
        </TouchableOpacity>
    )
}
export {Button, ButtonRect};
const styles = StyleSheet.create({
    button:{
        height:50,
        aspectRatio:1/1,
        backgroundColor:BUTTON.inBottomBar.bg,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    buttonRect:{
        borderRadius:25,
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        height:90,
        marginVertical:10
    },
    title:{
        textAlign:'center',
        color:BUTTON.inBottomBar.text
    }
})