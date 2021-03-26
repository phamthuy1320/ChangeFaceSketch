import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) =>{
    return (
        <View style = {[styles.container,{
            backgroundColor: props?.bgColor||"#617b92"
        }]}>
            {props?.left}
            <Text style = {[styles.text,{color:props?.color||'#fff'}]}>
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
        paddingHorizontal:5
    },
    text:{
        textAlign:'center'
    }
})