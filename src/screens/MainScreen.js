import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import commonStyle from './StyleCommon';
import {Header, Button} from './commons';
import {useNavigation} from '@react-navigation/native'
import { RNCamera } from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useCamera } from 'react-native-camera-hooks'

const features = {
    library:"Show library to choose a photo",
    save:"Save into library",
    edit:"Example draw or navigation to other screen where have pen, color, ... to edit",
    change:"Change photo to sketch have a loading when wait changing process"
}
// + Take photo
// + Save photo after edit
// + Edit
// +api deep learning in firebase


const MainScreen = ({initialProps}) =>{
    const [text, setText] = useState()
    const navigation = useNavigation()
    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
        {takePicture},
    ] = useCamera(initialProps);
    return(
        <>
        <Header title = {text}/>
        <View style = {commonStyle.bgCommon}>
            {/* <View style = {{backgroundColor: 'green', alignItems: 'center',justifyContent:'center',flex:1, marginVertical:10}}>
                <Text style = {{color:'#fff', fontSize: 50, fontWeight: 'bold', textAlign:'center'}}>{text?text:'CAMERA ACCESS'}</Text>
            </View> */}
            <View style={commonStyle.element}>
                <RNCamera
                    ref = {cameraRef}
                    autoFocusPointOfInterest={autoFocusPoint.normalized}
                    type={type}
                    ratio={ratio}
                    style={{ flex: 1 }}
                    autoFocus={autoFocus}
                >
                    <TouchableOpacity style = {{
                        marginVertical:10, 
                        alignSelf:'flex-end'}} 
                        onPress = {async ()=>{
                            const data = await takePicture()
                            console.warn(data)
                            Alert.alert(JSON.stringify(data.uri))
                        }}>
                        <Entypo name = 'camera' size = {45} color = '#fff'/>
                    </TouchableOpacity>
                </RNCamera>
            </View>
            <View style = {{
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <Button 
                    onPress = {()=>setText(features.library)} 
                    title = 'Library'
                    icon = {<MaterialIcons name = 'photo-library' size = {22}/>}
                />
                <Button 
                    onPress = {()=>setText(features.save)} 
                    title = 'Save'
                    icon = {<Entypo name = 'save' size = {22}/>}
                />
                <Button 
                    onPress = {()=>setText(features.edit)} 
                    title = 'Edit'
                    icon = {<Entypo name = 'edit' size = {22}/>}
                />
                <Button 
                    onPress = {()=>setText(features.change)} 
                    title = 'Change'
                    icon = {<FontAwesome name = 'exchange' size = {22}/>}
                />
                {/* <Button 
                    onPress = {()=>navigation.navigate('Photo')} 
                    title = '->'
                /> */}
            </View>
        </View>
        </>
    )
}

export default MainScreen;