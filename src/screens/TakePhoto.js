import React, {useState} from 'react'
import { PermissionsAndroid, Platform,View,Text,TouchableOpacity , ScrollView , Image } from "react-native";
// import CameraRoll from "@react-native-community/cameraroll";
import {RNCamera} from 'react-native-camera'
import commonStyle from './StyleCommon';
import {useNavigation} from '@react-navigation/native';
async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

// async function savePicture() {
//   if (Platform.OS === "android" && !(await hasAndroidPermission())) {
//     return;
//   }

//   CameraRoll.save(tag, { type, album })
// };

export default TakePhoto = () =>{
    const navigation = useNavigation();
    return (
      <View style = {commonStyle.bgCommon}>
        <TouchableOpacity onPress = {()=>navigation.navigate('Main')}>
          <Text>Take photo</Text>
        </TouchableOpacity>
      </View>
    );
}