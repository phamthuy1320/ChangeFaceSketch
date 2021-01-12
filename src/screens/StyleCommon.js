import React from 'react';
import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
    header:{
        backgroundColor: "#fff",
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
        backgroundColor:'#fff',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    element:{
        backgroundColor: 'green', 
        // alignItems: 'flex-end',
        // justifyContent:'flex-end',
        flex:1, 
        margin:10,
    },
    flipButton: {
        height: 40,
        padding: 5,
        margin:10,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
        alignContent:'center',
        justifyContent:'center',
      },
})

export default commonStyle;