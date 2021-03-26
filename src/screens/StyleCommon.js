import React from 'react';
import {StyleSheet} from 'react-native';

const styles_app = StyleSheet.create({
    bgCommon:{
        backgroundColor:"#dfddb2",
        flex:1,
        padding:10
    },
    cameraScreen:{
        backgroundColor: 'green', 
        flex:1, 
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

export default styles_app;