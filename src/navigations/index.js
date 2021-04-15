import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen'
import CameraScreen from '../screens/CameraScreen';
import SavedPicture from '../screens/SavedPicture';
import EditImage from '../screens/EditImage';
import LibraryScreen from '../screens/LibraryScreen';
// import _myModel from '../models/Model';

const Stack = createStackNavigator()
export default AppNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown:false}}>
                {/* <Stack.Screen name = 'Model' component = {_myModel}/> */}
                <Stack.Screen name = 'Main' component = {MainScreen}/>
                <Stack.Screen name = 'Camera' component = {CameraScreen}/>
                <Stack.Screen name = 'Save' component = {SavedPicture}/>
                <Stack.Screen name = 'Library' component = {LibraryScreen}/>
                <Stack.Screen name = 'Edit' component = {EditImage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}