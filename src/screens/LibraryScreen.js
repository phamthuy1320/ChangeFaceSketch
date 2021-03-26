import React,{useState} from 'react';
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
    FlatList
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Button, Header} from './commons';
import ImageItems from './ImageItems';
import BottomBar from './components/BottomBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
async function hasAndroidPermission(){
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if(hasPermission){
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status ==='granted';
}

async function savePicture(){
    if(Platform.OS === "android" && !(await hasAndroidPermission())){
        return;
    }
    else{
        CameraRoll.save(tag, {type, album})
    }
}

const w = Dimensions.get('window');
const LibraryScreen = () => {
    const [photos, setPhotos] = useState();
    const _handleButtonPress = () =>{
        hasAndroidPermission();
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

    const refresh = () =>{
        setPhotos();
        _handleButtonPress();
    }
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            { _handleButtonPress()}
            <Header 
                left = {<AntDesign 
                    onPress = {()=>navigation.navigate('Main')}
                    color="#fff" name = 'arrowleft' size = {22}/>}
                title = {'Library'.toUpperCase()}
                right = {<View/>}
            />
            <FlatList
                data = {photos}
                renderItem = {({item})=>
                    <ImageItems 
                        // source = {{uri:item.node.image.uri}}
                        uri = {item.node.image.uri}
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
        // backgroundColor:'#364e4a',
        backgroundColor:'#fff',
        flex:1,
        // alignItems:'center',
        // justifyContent:'center'
    },
    text:{
        color:'#fff',
        fontSize:20,
    }
})