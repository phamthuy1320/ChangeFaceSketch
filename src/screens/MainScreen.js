import React from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import {ButtonRect} from './commons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const BrandBox = () =>{
    return(
        <View style = {st_brandbox.container}>
            <Text style = {st_brandbox.text} >
                Welcome Face Sketch Aplication
            </Text>
        </View>
    )
}

const ButtonBox = () =>{
    const navigation = useNavigation()
    return (
        <View style = {styles.buttonBox}>
            <ButtonRect 
                onPress = {()=>navigation.navigate('Library')}
                color = '#fff'
                title = 'Camera'
                colorText = '#000'
                icon = {<AntDesign name = 'camera' size = {50} color='#000'/>}
                row
                // rightIcon = {<AntDesign name = 'right' size = {30} color = '#000'/>}
            />
            <ButtonRect
                onPress = {()=>navigation.navigate('Library')}
                title = 'Library'
                colorText = '#000'
                icon = {<Fontisto name = 'photograph' size = {50} color='#000'/>}
                row
            />
        </View>
    )
}
const MainScreen = () =>{
    return(
        <View style = {styles.container}>
            {/* <BrandBox/>
            <Text>Let's Start</Text> */}
            <ButtonBox/>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#cbe4e3',
        flex:1,
        justifyContent:'space-between',
        padding:10,
    },
    buttonBox:{
        flex:1/2,
        // flexDirection:'row',
        justifyContent:'space-between'
    }
})

const st_brandbox = StyleSheet.create({
    container: {
        backgroundColor:'#f2d149',
        flex:1/3,
        borderRadius:25,
        marginBottom:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        color:'#fff'
    }
})