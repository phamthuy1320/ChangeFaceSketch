import React from 'react';
import {
    View, 
    Text, 
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
const w = Dimensions.get('window');
const ImageItems = (props) =>{
    // const navigation = useNavigation();
    return(
        <TouchableOpacity 
            // onPress = {()=>navigation.navigate('Edit', {source:props.source})}
            onPress = {()=>props.navigation.navigate('Edit', {uri:props.uri, fromCamera:props.fromCamera})}
        >
            <Image {...props}
                // source = {props.source}
                source = {{uri:props.uri}}
                style = {styles.image}
            />
        </TouchableOpacity>
    )
}

export default ImageItems;

const styles = StyleSheet.create({
    container:{

    },
    image:{
        width:w.width/3-10,
        aspectRatio:1/1,
        margin:5,
        borderRadius:0
    }
})