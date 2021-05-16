import React, {useState} from 'react'
import {View, Image, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native'
import {Header, Announce, Button1} from './commons'
// import {useNavigation, useRoute} from '@react-navigation/native'
import {BGCOLOR, HEADER,BOTTOMBAR} from './commons/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import {BottomBar} from './components'
import {editSketch} from './utils/editSketch'
import {downloadImage} from './utils/downloadImage'
// import PhotoEditor from 'react-native-photo-editor'
const default_photo = 'https://i.pinimg.com/564x/bd/0f/4f/bd0f4f9d99dee4fd5c3ea53facc7492f.jpg'
// const default_sketch = 'https://i.pinimg.com/564x/5d/3d/16/5d3d16eb863c4cbdb3d23b30ee8e866f.jpg'
const default_sketch = require('../assets/default_sketch.png')
const load = 'loading.....'
const w = Dimensions.get('window')

const SavedPicture = ({navigation, route}) =>{
  // const navigation = useNavigation()
  // const route = useRoute()
  const [announce, setAnnounce] = useState(load)
  const [photo, setPhoto] = useState({uri:route?.params.uri||default_photo})
  const stateButtonPhoto = {header:'PHOTO',title:'Change', icon:'swap'}
  const stateButtonSketch = {header:'SKETCH',title:'Save', icon:'save'}
  const [state, setState] = useState(stateButtonPhoto)
  const [saved, setSaved] = useState(false)
  const backLibrary = () => {navigation.goBack()}
  const backPhoto = () => {
    setPhoto({uri:route.params?.uri})
    setState(stateButtonPhoto)
    setSaved(false)
    
  }
  const changeSketch = (uri) =>{
    setPhoto(default_sketch)
    setState(stateButtonSketch) 
    setAnnounce('Nothing')
    console.log('Done')
    setSaved(false)
  }
  const saveSketch = () => {
    setState(stateButtonSketch)
    setAnnounce('Saved In Library!')
    // const path = downloadImage(route.params?.uri)
    // console.log(path)
    // CameraRoll.save(path, 'photo')
  }
  // const path = downloadImage(route.params?.uri)
  const handlePress = () =>{
    if(state.header=='PHOTO'){
      changeSketch(route.params?.uri)
      setSaved(false)
    }else{
      saveSketch()
      setSaved(true)
    }
  }
  const BottomBox = () =>{
    return(
      <View style = {styles.button}>
        <Button1 
          onPress = {handlePress} 
          title = {state.title}
          icon = {<Entypo name = {state.icon} size = {22} color = {BOTTOMBAR.background}/>}
        />
        {
          state.header=='SKETCH'?
          <Button1 
            // onPress = {()=>navigation.navigate('EditSketch', {uri:photo.uri})}
            onPress = {()=>editSketch(route.params.uri)}
            title = 'Edit Sketch'
            icon = {<Entypo name = 'edit' size = {22} color = {BOTTOMBAR.background}/>}
          />:null}
        <Button1 
          onPress = {()=>navigation.navigate('Main')}
          title = 'Main'
          icon = {<Entypo name = 'home' size = {22} color = {BOTTOMBAR.background}/>}
        />
          
      </View>
    )
  }
  return(
    <>
    <View style = {styles.header}>
      <Header 
          left = {
            <AntDesign 
              onPress = {state.header=="SKETCH"?backPhoto:backLibrary}
              color={HEADER.text} name = 'arrowleft' size = {22}
            />
          }
          title = {state.header}
          right = {<View/>}
        />
      <Announce info = {announce} saved = {saved} close = {()=>setSaved(!saved)}/>
    </View>
    <View style = {styles.container}>
      <Image 
        source = {photo}
        style = {styles.image} 
        resizeMode = 'contain'
      />
      {/* <Image
        source = {{uri:path}}
        style = {styles.image}
        resizeMode = 'contain'
      /> */}
      <BottomBox/>
    </View>
    </>
  )
}

export default SavedPicture;

const styles = StyleSheet.create({
  header:{
    // flex:1
  },
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