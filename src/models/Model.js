import React from 'react';
import {Text} from 'react-native'
import Tflite from 'tflite-react-native';

let tflite = new Tflite();
const MODEL_URL  ='./model/inception.json'
const uri = 'https://1079614922.rsc.cdn77.org/data/images/full/13477/emma-watson.jpg'
const _myModel = () =>{
    return(
        <Text>{MODEL_URL}</Text>
    )
}
export default _myModel;