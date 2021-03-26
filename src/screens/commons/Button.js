import React from 'react';
import {View,TouchableOpacity, Text, StyleSheet} from 'react-native';
import common from '../StyleCommon';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Button = (props) =>{
    return (
        <>
            <TouchableOpacity style = {styles.button} {...props}>
              {props?.icon}
            </TouchableOpacity>
            {props.title?<Text style = {{textAlign:'center'}}>{props.title}</Text>:null}
        </>
    )
}

const ButtonRect = (props) =>{
    return (
        <>
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
                {/* :)))))))) 変だね */}
                {props.row?(props?.rightIcon||<View/>):null}
            </TouchableOpacity>
            
        </>
    )
}
export {Button, ButtonRect};
const styles = StyleSheet.create({
    button:{
        height:50,
        aspectRatio:1/1,
        backgroundColor:'#fff',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    buttonRect:{
        // aspectRatio:1/1,
        borderRadius:25,
        flex:100/204,
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        paddingHorizontal:10
    },
    title:{
        textAlign:'center'
    }
})