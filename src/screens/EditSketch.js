import React, {useEffect} from 'react';
import {View} from 'react-native';
// import {useRoute} from '@react-navigation/native';

// import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import PhotoEditor from 'react-native-photo-editor'

const EditSketch = ({route}) =>{
    // const route = useRoute()
    const _onPress = () => {
        PhotoEditor.Edit({
        path: route.params?.uri.split('file://')[1],
        stickers: [
            'sticker0',
            'sticker1',
            'sticker2',
            'sticker3',
            'sticker4',
            'sticker5',
            'sticker6',
            'sticker7',
            'sticker8',
            'sticker9',
            'sticker10',
        ],
        colors:undefined,
        onDone: (imagePath) => {
            console.log('on done',JSON.stringify(imagePath));
        },
        onCancel: () => {
            console.log('on cancel',route?.params?.uri);
        },
        });
    }
    useEffect(()=>_onPress)
    return(<View/>)
}
export default EditSketch;