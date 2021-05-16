import React, { Component } from 'react';

import {PermissionsAndroid, Alert } from 'react-native';

// import RNFetchBlob from 'rn-fetch-blob';
// import RNFS from 'react-native-fs'

export async function request_storage_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'ReactNativeCode Storage Permission',
        'message': 'ReactNativeCode App needs access to your storage to download Photos.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      Alert.alert("Storage Permission Granted.");
    }
    else {

      Alert.alert("Storage Permission Not Granted");

    }
  } catch (err) {
    console.warn(err)
  }
}

const  getExtention = (filename) => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
      undefined;
  }

export const downloadImage = (uri) => {
    // var date = new Date();
    // var image_URL = uri;
    // var ext = getExtention(image_URL);
    // ext = "." + ext[0];
    // const { config, fs } = RNFetchBlob;
    // let PictureDir = fs.dirs.PictureDir
    // let options = {
    //   fileCache: true,
    //   addAndroidDownloads: {
    //     useDownloadManager: true,
    //     notification: true,
    //     path: PictureDir + "/image_" + Math.floor(date.getTime()
    //       + date.getSeconds() / 2) + ext,
    //     description: 'Image'
    //   }
    // }
    // config(options).fetch('GET', image_URL).then((res) => {
    //   Alert.alert("Image Downloaded Successfully.");
    // });

    var RNFS = require('react-native-fs')
    var path = RNFS.DocumentDirectoryPath + '/ImageName.png';
    // write the file
    RNFS.writeFile(path, '../../assets/default_sketch.png', 'utf8') // what to use inplace of utf8?
      .then((success) => {
        console.log('file:/'+path);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return 'file:/'+path
  }
