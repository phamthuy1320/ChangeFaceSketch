import React from 'react';
import {View, Text} from 'react-native';
import common from '../StyleCommon';

const Header = (props) =>{
    return (
        <View style = {common.header}>
            <Text>
                {props.title}
            </Text>
        </View>
    )
}

export default Header;