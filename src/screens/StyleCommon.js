import React from 'react';
import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
    header:{
        backgroundColor: "#eceabe",
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    bgCommon:{
        backgroundColor:"#dfddb2",
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
    cameraScreen:{
        backgroundColor: 'green', 
        // alignItems: 'flex-end',
        // justifyContent:'flex-end',
        flex:1, 
        margin:10,
    },
    cameraIcon:{
        flex:1, 
        justifyContent:'flex-end', 
        alignSelf:'center'
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