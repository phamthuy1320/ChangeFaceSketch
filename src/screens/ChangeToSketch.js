import React, {useState} from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {useRoute} from '@react-navigation/native';
const changeSketch = (uri) =>{
    const _uri = uri
    return _uri;
}

const ChangeToSketch = () =>{
    const route = useRoute();
    const [sketch, setSketch] = useState();
    setSketch(changeSketch(route.params?.uri));
    return(
        <View style = {styles.container}>
            <Image source = {{uri:sketch}}
                style = {styles.image}
            />
        </View>
    )
}

export default ChangeToSketch;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#364e4a',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
    image:{
        height:'100%',
        width:'100%'
    }
})