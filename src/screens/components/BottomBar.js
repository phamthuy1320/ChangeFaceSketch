import React,{useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../commons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import {BOTTOMBAR} from '../commons/Colors';

const BottomBar = ()=>{
    const navigation = useNavigation();
    const [photoURI, setPhotos] = useState('https://i.pinimg.com/564x/bd/0f/4f/bd0f4f9d99dee4fd5c3ea53facc7492f.jpg')
    return(
        <View style = {{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10,
            backgroundColor:BOTTOMBAR.background
        }}>
            <Button 
                onPress = {()=>navigation.navigate('Library')} 
                title = 'Library'
                icon = {<MaterialIcons name = 'photo-library' size = {22}/>}
            />
            <Button 
                onPress = {()=>navigation.navigate('Save',{uri:photoURI})}
                title = 'Save'
                icon = {<Entypo name = 'save' size = {22}/>}
            />
            <Button 
                onPress = {()=>navigation.navigate('Edit')} 
                title = 'Edit'
                icon = {<Entypo name = 'edit' size = {22}/>}
            />
            <Button 
                onPress = {()=>navigation.navigate('Change')} 
                title = 'Change'
                icon = {<FontAwesome name = 'exchange' size = {22}/>}
            />
        </View>
    )
}

export default BottomBar;