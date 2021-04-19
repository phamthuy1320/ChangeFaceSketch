import React from 'react';
import PhotoEditor from 'react-native-photo-editor'

const editImage = (uri) => {
    PhotoEditor.Edit({
    path: uri.split('file://')[1],
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
    // hiddenControls: [
    //   'clear',
    //   'crop',
    //   'draw',
    //   'save',
    //   'share',
    //   'sticker',
    //   'text',
    // ],
    colors:undefined,
    onDone: (imagePath) => {
        console.log('on done',JSON.stringify(imagePath));
    },
    onCancel: () => {
        console.log('on cancel',route.params?.uri);
    },
    });
}

export {editImage};