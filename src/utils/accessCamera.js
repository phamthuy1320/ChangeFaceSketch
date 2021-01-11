import React from 'react';
import CameraRoll from '@react-native-community/cameraroll'
import {PermissionsAndroid, Platform} from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera';

// + Check access camera Permission
// + Save picture (tag: )
async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    else{
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }
  }

async function savePicture() {
if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    return;
}
else{CameraRoll.save(tag, { type, album })}
};