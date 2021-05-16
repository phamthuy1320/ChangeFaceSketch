import React,{useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet,
    Dimensions,
} from 'react-native';
// import {useRoute, useNavigation} from '@react-navigation/native';
import {Header} from './commons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {BottomPhoto} from './components/BottomBar';
import {BGCOLOR,HEADER} from './commons/Colors';
const w = Dimensions.get('window');
const photo = 'https://i.pinimg.com/564x/bd/0f/4f/bd0f4f9d99dee4fd5c3ea53facc7492f.jpg'
const EditImage = ({navigation, route}) =>{
    // const route = useRoute();
    // const navigation = useNavigation();
    const [cropedURI, setCropedURI] = useState();
    const _openCropper = (uri) =>{
        ImagePicker.openCropper({
            path: uri
          }).then(image => {
            console.log(image.path);
            setCropedURI(image.path)
          });
    }
    
    return(
        <>
            <Header 
                title = {'PHOTO'}
                left = {<AntDesign color = {HEADER.text} name = 'arrowleft' size = {22}
                    onPress = {()=>navigation.goBack()}
                />}
                right = {<View/>}
            />
            
            <View style = {styles.container}>
                <Image 
                    // source = {route?.params.source}
                    source = {{uri:cropedURI?cropedURI:route?.params?.uri||photo}}
                    style = {styles.image}
                    resizeMode = 'contain'
                />
            </View>

            <BottomPhoto
                navigation = {navigation}
                fromCamera = {route?.params?.fromCamera}
                onPressCrop = {()=>_openCropper(route?.params.uri)}
                onPressSave = {()=>navigation.navigate('Save',{uri:cropedURI?cropedURI:route?.params?.uri})}
            />
        </>
    )
}

export default EditImage;

const styles = StyleSheet.create({
    container:{
        backgroundColor:BGCOLOR,
        flex:1,
        padding:5
    },
    image:{
        width: '100%',
        height:'100%',
    }
})