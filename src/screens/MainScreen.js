import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
}from 'react-native';
import {ButtonRect} from './commons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {BGCOLOR, BUTTON} from './commons/Colors';
const im_brand = 'https://raw.githubusercontent.com/phamthuy1320/GRADUATE_IMAGE/master/x.png';
const im_background = 'https://raw.githubusercontent.com/phamthuy1320/GRADUATE_IMAGE/master/background.png';
const BrandBox = () =>{
    const str = 'How do you want to \nget starting?'
    return(
        <View style = {styles.brandbox}>
            <Text style = {st_brandbox.text}>{str}</Text>
        </View>
    )
}

const ButtonBox = () =>{
    const navigation = useNavigation()
    return (
        <View style = {styles.buttonBox}>
            <ButtonRect 
                onPress = {()=>navigation.navigate('Camera')}
                color = {BUTTON.inMain.camera.bg}
                title = 'Camera'
                colorText = {BUTTON.inMain.camera.text}
                icon = {<AntDesign name = 'camera' size = {50} color={BUTTON.inMain.camera.text}/>}
                row
            />
            <ButtonRect
                onPress = {()=>navigation.navigate('Library')}
                title = 'Library'
                colorText = {BUTTON.inMain.library.text}
                color = {BUTTON.inMain.library.bg}
                icon = {<Fontisto name = 'photograph' size = {50} color={BUTTON.inMain.library.text}/>}
                row
            />
        </View>
    )
}
const IntroductionBox = () =>{
    const str = 'Present about this application\nThis is my project\nPham Thi Thuy K62 UET'
    return(
        <View style = {styles.introducts}>
            <Text style = {st_introductionbox.text}>{str}</Text>
        </View>
    )
}
const MainScreen = () =>{
    return(
        // <View style = {styles.container}>
        <ImageBackground source ={{uri:im_background}} style = {styles.container} resizeMode = 'stretch'>
            <BrandBox/>
            <ButtonBox/>
            <IntroductionBox/>
        </ImageBackground>
        // </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        // backgroundColor:BGCOLOR,
        flex:1,
        justifyContent:'space-between',
        padding:10,
    },
    brandbox: {
        flex:1/3,
        borderRadius:25,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    buttonBox:{
        flex:1/3,
        padding:25,
        justifyContent:'space-between',
        marginTop:200
    },
    introduction:{
        flex:1/3
    }
})

const st_brandbox = StyleSheet.create({
    text:{
        fontSize:35,
        color:'#fff',
        textAlign:'right'
    }
})
const st_introductionbox = StyleSheet.create({
    text:{
        textAlign:'center',
        fontStyle:'italic'
    }
})