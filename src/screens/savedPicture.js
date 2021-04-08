import React, {useState} from 'react'
import {View, Image, StyleSheet, Dimensions, Text,Button} from 'react-native'
import {Header, Announce} from './commons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {BGCOLOR, HEADER} from './commons/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BottomBar} from './components'
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
          onPress = {()=>navigation.navigate('Library')}
          color={HEADER.text} name = 'arrowleft' size = {22}
        />
      }
      title = 'SAVED PICTURE'
      right = {<View/>}
    />
    
    <View style = {styles.container}>
      <Image 
        source = {{uri:route.params?.uri||photo}}
        style = {styles.image} 
        resizeMode = 'contain'
      />

      <View style = {styles.button}>
        <Button title = 'Change'/>
      </View>
    </View>

    </>
  )
}

export default SavedPicture;

const styles = StyleSheet.create({
  container:{
    backgroundColor:BGCOLOR,
    flex:1,
    padding:5,
    justifyContent:'flex-start',
    alignContent:'flex-start',
  },
  image:{
      flex:6/7,
      width:'100%',
      height:'90%',
  },
  button:{
    flex:1/7,
    width:w.width/3,
    alignSelf:'center',
    justifyContent:'center',
    alignContent:'center'
  }
})