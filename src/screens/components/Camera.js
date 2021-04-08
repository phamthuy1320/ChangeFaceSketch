import React, {useState} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {Header, Button} from '../commons';
import {useNavigation} from '@react-navigation/native'
import { RNCamera } from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo'
import { useCamera } from 'react-native-camera-hooks'

const Camera = ({initialProps, props}) =>{
    const [photoURI, setPhotoURI] = useState(); 
    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint },
    ] = useCamera(initialProps);
    const navigation = useNavigation()
    
    const takePicture = async () => {
        if (cameraRef.current) {
          const options = { quality: 0.5, base64: true, skipProcessing: true };
          const data = await cameraRef.current.takePictureAsync(options);
          const source = data.uri;
          if (source) {
            // await cameraRef.current.pausePreview();
            console.log("picture source", source);
            navigation.navigate('Edit', {uri:source})
          }
        }
      }
    return(
        <RNCamera
            ref = {cameraRef}
            autoFocusPointOfInterest={autoFocusPoint.normalized}
            type={type}
            ratio={ratio}
            style={{flex:1}}
            autoFocus={autoFocus}
        >
            <TouchableOpacity  
                style = {styles.camera}
                onPress = {takePicture}>
                <Entypo name = 'camera' size = {45} color = '#fff'/>
            </TouchableOpacity>
        </RNCamera>
    )
}
export default Camera;

const styles = StyleSheet.create({
    camera:{
        flex:1, 
        justifyContent:'flex-end', 
        alignSelf:'center'
    },
})