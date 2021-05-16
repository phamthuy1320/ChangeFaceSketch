import React from 'react';
// import {View} from 'react-native';
// import {Header} from './commons';
import Camera from './components/Camera';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {HEADER} from './commons/Colors'
// import {useNavigation} from '@react-navigation/native'

const CameraScreen = ({navigation}) =>{
    // const navigation = useNavigation()
    return(
        <>
        {/* <Header 
            left = {<View/>}
            title = {'camera'.toUpperCase()}
            right = {
            <MaterialIcons 
                name = 'photo-library' 
                size = {22} 
                color = {HEADER.text}
                onPress = {()=>navigation.navigate('Library')}
            />}
        /> */}
        <Camera navigation = {navigation} />
        </>
    )
}

export default CameraScreen;