import React from 'react'
import {View, Text} from 'react-native'
import commonStyle from './StyleCommon';
import {Header, Button} from './commons';

const MainScreen = () =>{
    return(
        <>
        <Header title = "Main Screen "/>
        <View style = {commonStyle.bgCommon}>
            <Text>MainScreen</Text>
            <View style = {{
                flexDirection:'row',
                flex:1, 
                justifyContent:'space-between'
            }}>
                <Button color = 'orange'/>
                <Button/>
                <Button/>
                <Button/>
            </View>
        </View>
        </>
    )
}

export default MainScreen;