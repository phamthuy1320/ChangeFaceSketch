import React, {useState} from 'react'
import {View, Image, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native'
import {Header, Announce, Button} from './commons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {BGCOLOR, HEADER,BOTTOMBAR} from './commons/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {BottomBar} from './components'
// import changeSketch from './utils/changeSketch'
const default_photo = 'https://i.pinimg.com/564x/bd/0f/4f/bd0f4f9d99dee4fd5c3ea53facc7492f.jpg'
const default_sketch = 'https://i.pinimg.com/564x/5d/3d/16/5d3d16eb863c4cbdb3d23b30ee8e866f.jpg'
const load = 'loading.....'
const w = Dimensions.get('window')

const SavedPicture = () =>{
  const navigation = useNavigation()
  const route = useRoute()
  const [announce, setAnnounce] = useState('')
  const [photo, setPhoto] = useState(route.params?.uri||default_photo)
  const [stateButton, setButton] = useState({title:'Change', icon:'swap'})
  const changeSketch = (uri) =>{
    // const _sketch = uri;
    // setPhoto(photo==default_photo?default_sketch:default_photo)
    setPhoto(default_sketch)
    setButton({title:'Save', icon:'save'})
    console.log('Done')
  }
  const BottomBox = () =>{
    return(
      <View style = {styles.button}>
        <Button 
          onPress = {()=>changeSketch(route.params?.uri)} 
          title = {stateButton.title}
          icon = {<Entypo name = {stateButton.icon} size = {22} color = {BOTTOMBAR.background}/>}
          // icon = {<MaterialIcons name = 'photo-library' size = {22} color = {BOTTOMBAR.background}/>}
        />
        <Button 
          onPress = {()=>navigation.navigate('Edit')}
          title = 'Edit'
          icon = {<Entypo name = 'edit' size = {22} color = {BOTTOMBAR.background}/>}
        />
        <Button 
          onPress = {()=>navigation.navigate('Main')}
          title = 'Main'
          icon = {<Entypo name = 'home' size = {22} color = {BOTTOMBAR.background}/>}
        />
          
      </View>
    )
  }
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
        source = {{uri:photo}}
        style = {styles.image} 
        resizeMode = 'contain'
      />
      <Text style = {styles.announce}>{announce}</Text>
      {/* <ActivityIndicator size = 'large' c*olor = '#000'/> */}
      <BottomBox/>
      {/* <View style = {styles.button}>
        <Button title = {stateButton.toString()} onPress = {()=>changeSketch(route.params?.uri)}/>
        <Button title = 'go to menu' onPress = {()=>navigation.navigate('Main')}/>
        <Button title = 'Edit' onPress = {()=>navigation.navigate('Edit')}/>
      </View> */}
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
      flex:1,
      width:'100%',
      height:'100%',
  },
  button:{
    padding:10,
    justifyContent:'space-around',
    alignContent:'center',
    flexDirection:'row',
  },
  announce:{
    textAlign:'center',
    fontSize:22
  }
})