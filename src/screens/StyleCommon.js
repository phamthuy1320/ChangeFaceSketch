import React from 'react';
import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
    header:{
        backgroundColor: "#ffaa",
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    bgCommon:{
        backgroundColor:"#fff",
        flex:1,
        padding:10
    },
    button:{
        height:50,
        aspectRatio:1/1,
        backgroundColor:'red',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:25
    }
})

export default commonStyle;