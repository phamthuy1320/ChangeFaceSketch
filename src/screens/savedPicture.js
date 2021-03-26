import React, {useState} from 'react'
import {View, Text, Image} from 'react-native'
import {Header} from './commons'
import common from './StyleCommon'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Button} from './commons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SavedPicture = () =>{
  const navigation = useNavigation()
  const route = useRoute()
  return(
    <>
    <Header title = 'SAVED PICTURE'/>
    <View style = {common.bgCommon}>
      {route.params.uri?
        <Image source = {{uri:route.params?.uri}} style = {{height:'100%', flex:1}}/>:
        <View style = {{flex:1}}/>
      }
      {/* <Text onPress = {()=> navigation.navigate('Main')}>Go to Camera</Text> */}
      <View style = {{
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
          <Button 
              onPress = {()=>navigation.navigate('Main')} 
              title = 'Camera'
              icon = {<MaterialIcons name = 'camera' size = {22}/>}
          />
          <Button 
              // onPress = {()=>setText(features.save)} 
              onPress = {()=>{}}
              title = 'Save'
              icon = {<Entypo name = 'save' size = {22}/>}
          />
          <Button 
              onPress = {()=>{}} 
              title = 'Edit'
              icon = {<Entypo name = 'edit' size = {22}/>}
          />
          <Button 
              onPress = {()=>{}} 
              title = 'Change'
              icon = {<FontAwesome name = 'exchange' size = {22}/>}
          />
          {/* <Button 
              onPress = {()=>navigation.navigate('Photo')} 
              title = '->'
          /> */}
        </View>
    </View>
    </>
  )
}

export default SavedPicture;