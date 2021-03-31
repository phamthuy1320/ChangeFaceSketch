import React, {useState} from 'react'
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native'
import {Header, Announce} from './commons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {BGCOLOR} from './commons/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const photo = 'https://i.pinimg.com/564x/bd/0f/4f/bd0f4f9d99dee4fd5c3ea53facc7492f.jpg'

const w = Dimensions.get('window')
const SavedPicture = () =>{
  const navigation = useNavigation()
  const route = useRoute()
  const [announce, setAnnounce] = useState(true);

  return(
    <>
    <Header 
      left = {
        <AntDesign 
          onPress = {()=>navigation.goBack()}
          color="#fff" name = 'arrowleft' size = {22}
        />
      }
      title = 'SAVED PICTURE'
      right = {<View/>}
    />
    <Announce info = 'いいですね！フフフ'/>
    <View styles = {styles.container}>
      {/* {route.params.uri?
        <Image source = {{uri:route.params?.uri}} style = {styles.image}/>:
        
      } */}
      {/* <Text>You want to try to it?</Text> */}
      <Image source = {{uri:photo}} style = {styles.image} 
        resizeMode='center'
      />
    </View>
    </>
  )
}

export default SavedPicture;

const styles = StyleSheet.create({
  container:{
    backgroundColor:BGCOLOR,
    flex:1
  },
  image:{
    width:w.width,
    height:w.height
  }
})