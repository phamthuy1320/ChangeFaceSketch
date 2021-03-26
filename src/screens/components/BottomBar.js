import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../commons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const BottomBar = ()=>{
    const navigation = useNavigation();
    return(
        <View style = {{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10,
            backgroundColor:'#000'
        }}>
            <Button 
                onPress = {()=>navigation.navigate('Library')} 
                title = 'Library'
                icon = {<MaterialIcons name = 'photo-library' size = {22}/>}
            />
            <Button 
                // onPress = {()=>setText(features.save)} 
                onPress = {()=>navigation.navigate('Save',{uri:photoURI})}
                title = 'Save'
                icon = {<Entypo name = 'save' size = {22}/>}
            />
            <Button 
                // onPress = {()=>setText(features.edit)} 
                title = 'Edit'
                icon = {<Entypo name = 'edit' size = {22}/>}
            />
            <Button 
                // onPress = {()=>setText(features.change)} 
                title = 'Change'
                icon = {<FontAwesome name = 'exchange' size = {22}/>}
            />
        </View>
    )
}

export default BottomBar;