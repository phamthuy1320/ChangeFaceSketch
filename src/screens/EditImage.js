import React,{useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet,
    Dimensions,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Header} from './commons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import BottomBar from './components/BottomBar';

const w = Dimensions.get('window');
const EditImage = (props) =>{
    const route = useRoute();
    const navigation = useNavigation();
    const [cropedURI, setCropedURI] = useState();
    const _openCropper = (uri) =>{
        ImagePicker.openCropper({
            path: uri,
            width: 300,
            height: 400
          }).then(image => {
            console.log(image.path);
            setCropedURI(image.path)
          });
    }
    
    return(
        <>
            <Header 
                title = {'PHOTO'}
                left = {<AntDesign color = '#fff' name = 'arrowleft' size = {22}
                    onPress = {()=>navigation.goBack()}
                />}
                right = {
                    <View style = {{flexDirection:'row'}}>
                        <SimpleLineIcons color = '#fff' name = 'crop' size = {22}
                            onPress = {()=>_openCropper(route?.params.uri)}
                        />
                        {/* <View style ={{marginHorizontal:10}} />
                        <MaterialIcons color = '#fff' name = 'done' size = {22}/> */}
                    </View>
                    }
            />
            
            <View style = {styles.container}>
                <Image 
                    {...props}
                    // source = {route?.params.source}
                    source = {{uri:cropedURI?cropedURI:route?.params.uri}}
                    style = {styles.image}
                    resizeMode = 'contain'
                />
            </View>

            <BottomBar/>
        </>
    )
}

export default EditImage;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#364e4a',
        flex:1,
        // alignItems:'center',
        // justifyContent:'center'
        padding:5
    },
    image:{
        width: '100%',
        height:'100%',
    }
})