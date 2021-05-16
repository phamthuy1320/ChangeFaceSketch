import React, {useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, View, Image, Alert} from 'react-native'
import {Header, Button} from '../commons';
import {HEADER} from '../commons/Colors';
// import {useNavigation} from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo';
import { useCamera } from 'react-native-camera-hooks';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CameraRoll from '@react-native-community/cameraroll';
const HeightIconClick = 45
const URITest = 'https://i.pinimg.com/564x/9c/62/f7/9c62f7ada70865a2388909b886299e93.jpg'
const Camera = ({initialProps, navigation}) =>{
    // const [photoURI, setPhotoURI] = useState(); 
    const [photo, setphoto] = useState();
    const [{ cameraRef, type, ratio, autoFocus, autoFocusPoint }] = useCamera(initialProps);
    // const navigation = useNavigation()
    const takePicture = async () => {
        if (cameraRef.current) {
          const options = { quality: 0.5, base64: true, skipProcessing: true };
          const data = await cameraRef.current.takePictureAsync(options);
          const source = data.uri;
          if (source) {
            // await cameraRef.current.pausePreview();
            console.log("picture source", source);
            CameraRoll.save(source, 'photo')
            navigation.navigate('Edit', {uri:source, fromCamera:true})
          }
        }
      }
    
    const getPhoto = ()=> {
        CameraRoll.getPhotos({
            first:1,
            assetType:'Photos',
        })
        .then(r=>{
            setphoto(r.edges[0]?.node.image.uri||URITest)
            console.log(r.edges[0].node.image.uri)})
        .catch((err)=>{
            console.log(err)
            Alert.alert('Can\'t load photos')
        })}

    useEffect(getPhoto, [])
    return(
        <>
        <RNCamera
            ref = {cameraRef}
            autoFocusPointOfInterest={autoFocusPoint.normalized}
            type={type}
            ratio={ratio}
            style={{flex:1}}
            autoFocus={autoFocus}
        >
            <Header 
                left = {<AntDesign color = {HEADER.text} name = 'arrowleft' size = {22}
                    onPress = {()=>navigation.goBack()}/>}
                title = {'camera'.toUpperCase()}
                right = {<View/>}
            />
            <View style = {styles.cameraContainer}>
                <TouchableOpacity  
                    style = {styles.camera}
                    onPress = {()=>{navigation.navigate('Library')}}
                >
                    <Image source = {{uri: photo}} style = {styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity  
                    style = {styles.camera}
                    onPress = {takePicture.bind(navigation)}>
                    <Entypo name = 'camera' 
                        size = {HeightIconClick} color = '#fff'/>
                </TouchableOpacity>
                <View style = {styles.camera}/>
            </View>
        </RNCamera>
    </>
    )
}
export default Camera;

const styles = StyleSheet.create({
    cameraContainer:{
        flex:1,
        flexDirection:'row'
    },
    camera:{
        flex:1, 
        justifyContent:'flex-end',
        alignContent:'center',
        alignItems:'center'
    },
    image:{
        height:50,
        aspectRatio:1/1,
        margin:5
    }
})