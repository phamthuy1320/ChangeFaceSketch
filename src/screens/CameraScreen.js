import React from 'react';
import {View} from 'react-native';
import {Header} from './commons';
import Camera from './components/Camera';
import BottomBar from './components/BottomBar';

const CameraScreen = () =>{
    return(
        <>
        <Header 
            left = {<View/>}
            title = {'camera'.toUpperCase()}
            right = {<View/>}
        />
        <Camera/>
        <BottomBar/>
        </>
    )
}

export default CameraScreen;