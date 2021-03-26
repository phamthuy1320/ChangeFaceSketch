import React from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';

const ChangeToSketch = () =>{
    return(
        <View style = {styles.container}/>
    )
}

export default ChangeToSketch;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#364e4a',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
})