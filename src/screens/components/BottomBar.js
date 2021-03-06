import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../commons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import {BOTTOMBAR} from '../commons/Colors';

const BottomBar = (props)=>{
    // const navigation = useNavigation();
    const [photoURI, setPhotos] = useState('https://i.pinimg.com/564x/bd/0f/4f/bd0f4f9d99dee4fd5c3ea53facc7492f.jpg')
    return(
        <View style = {styles.container}>
            <Button 
                onPress = {()=>props.navigation.navigate('Library')} 
                title = 'Library'
                icon = {<MaterialIcons name = 'photo-library' size = {22} color = {BOTTOMBAR.background}/>}
            />
            <Button 
                onPress = {()=>props.navigation.navigate('Save',{uri:photoURI})}
                title = 'Save'
                icon = {<Entypo name = 'save' size = {22} color = {BOTTOMBAR.background}/>}
            />
            <Button 
                onPress = {()=>props.navigation.navigate('Edit')} 
                title = 'Edit'
                icon = {<Entypo name = 'edit' size = {22} color = {BOTTOMBAR.background}/>}
            />
        </View>
    )
}

export const BottomPhoto = (props)=>{
    // const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            {props.fromCamera==true?
            <Button 
                onPress = {()=>props.navigation.navigate('Library')} 
                title = 'Library'
                icon = {<MaterialIcons name = 'photo-library' size = {22} color = {BOTTOMBAR.background}/>}
            />:
            <Button 
                onPress = {()=>props.navigation.navigate('Camera')} 
                title = 'Camera'
                icon = {<AntDesign name = 'camera' size = {22} color = {BOTTOMBAR.background}/>}
            />
            }
            <Button 
                onPress = {props.onPressCrop}
                title = 'Crop'
                icon = {<SimpleLineIcons color = {BOTTOMBAR.background} name = 'crop' size = {22}/>}
            />
            <Button 
                onPress = {props.onPressSave} 
                title = 'Save'
                icon = {<Entypo name = 'save' size = {22} color = {BOTTOMBAR.background}/>}
            />
        </View>
    )
}

export default BottomBar;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        backgroundColor:BOTTOMBAR.background
    }
})