import React,{useState, useEffect} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    PermissionsAndroid,
    Platform,
    Dimensions,
    FlatList,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Button, Header} from './commons';
import ImageItems from './ImageItems';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
import { BGCOLOR, HEADER } from './commons/Colors';
const  hasAndroidPermission = async ()=>{
    const permission = await PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE

    const hasPermission = PermissionsAndroid.check(permission);
    if(await hasPermission){
        return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status ==='granted';
}

const w = Dimensions.get('window');
const LibraryScreen = ({navigation}) => {
    const [photos, setPhotos] = useState();
    // const navigation = useNavigation();
    const getPhoto = () =>{
        hasAndroidPermission()
        CameraRoll.getPhotos({
            first:20,
            assetType:'Photos',
        })
        .then(r=>{
            setPhotos(r.edges)
        })
        .catch((err)=>{
            console.log('Cant loading photos')
        })
    }
    useEffect(()=>{
        hasAndroidPermission()
        .then(getPhoto)},[])
    return(
        <View style = {styles.container}>
            <Header 
                left = {<AntDesign 
                    onPress = {()=>navigation.goBack()}
                    color={HEADER.text} name = 'arrowleft' size = {22}/>}
                title = {'Library'.toUpperCase()}
                right = {<View/>}
            />
            <FlatList
                data = {photos}
                renderItem = {({item})=>
                    <ImageItems 
                        navigation = {navigation}
                        // source = {{uri:item.node.image.uri}}
                        uri = {item.node.image.uri}
                        fromCamera = {false}
                    />
                    }
                numColumns = {3}
                keyExtractor = {(item, idx)=>idx.toString()}
            />
        </View>
    )
}

export default LibraryScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:BGCOLOR,
        flex:1,
    },
    text:{
        color:HEADER.text,
        fontSize:20,
    }
})