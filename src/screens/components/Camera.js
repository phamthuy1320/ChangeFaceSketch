import React, {useState} from 'react'
import {
    View, 
    Text, 
    TouchableOpacity, 
    Alert,
    StyleSheet
} from 'react-native'
import styles_app from '../StyleCommon';
import {useNavigation} from '@react-navigation/native'
import { RNCamera } from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo';
import { useCamera } from 'react-native-camera-hooks';

const Camera = ({initialProps, props}) =>{
    const [photoURI, setPhotoURI] = useState(); 
    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
        {takePicture},
    ] = useCamera(initialProps);
    const navigation = useNavigation()
    return(
        <>
            <RNCamera
                ref = {cameraRef}
                autoFocusPointOfInterest={autoFocusPoint.normalized}
                type={type}
                ratio={ratio}
                style={styles_app.cameraScreen}
                autoFocus={autoFocus}
            >
                <TouchableOpacity  
                    style = {styles.cameraIcon}
                    onPress = {async ()=>{
                        const data = await takePicture()
                        // setPhotoURI(data.uri)
                        // console.log(data.uri)
                        // Alert.alert(JSON.stringify(data.uri))
                        await navigation.navigate('Edit',{uri:data.uri})
                        // props.setToken(false)
                    }}>
                    <Entypo name = 'camera' size = {45} color = '#fff'/>
                </TouchableOpacity>
            </RNCamera>
        </>
    )
}

export default Camera;

const styles = StyleSheet.create({
    container:{

    },
    cameraScreen:{
        backgroundColor: 'green', 
        flex:1, 
    },
    cameraIcon:{
        flex:1, 
        justifyContent:'flex-end', 
        alignSelf:'center'
    },
})