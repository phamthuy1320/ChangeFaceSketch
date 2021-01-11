import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import common from '../StyleCommon';

const Button = (props) =>{
    return (
        <View>
            <TouchableOpacity style = {common.button} {...props}>
              {props?.icon}
            </TouchableOpacity>
            {props.title?<Text style = {{textAlign:'center'}}>{props.title}</Text>:null}
        </View>
    )
}

export default Button;
