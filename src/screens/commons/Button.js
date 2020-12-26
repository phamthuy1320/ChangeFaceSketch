import React from 'react';
import {View, Text} from 'react-native';
import common from '../StyleCommon';

const Button = (props) =>{
    return (
        <View style = {common.button,{backgroundColor:props?.color||'red'}}>
            {props?.icon}
        </View>
    )
}

export default Button;
