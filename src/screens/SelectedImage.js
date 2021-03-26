import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';
import {Button} from './commons';
import {useNavigation} from '@react-navigation/native';
const SelectedImage = () =>{
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            <Button title = 'library' 
                onPress = {()=>navigation.goBack()}
            />
        </View>
    )
}


export default SelectedImage;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#364e4a',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
})