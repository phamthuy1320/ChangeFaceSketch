import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ANNOUNCE} from '../commons/Colors';
import {ButtonRect} from '../commons'

const Announce = (props) =>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{props?.info}</Text>
            <ButtonRect title = 'CANCEL'/> 
            {/* <View style = {styles.button_box}>
                <ButtonRect title = 'CANCEL'/>
                <ButtonRect title = 'OK'/>
            </View> */}
        </View>
    )
}

export default Announce;

const styles = StyleSheet.create({
    container:{
        backgroundColor:ANNOUNCE.info,
        height:70,
        width:'100%',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderBottomWidth:1,
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