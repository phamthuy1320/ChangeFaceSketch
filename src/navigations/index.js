import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen'
import SavedPicture from '../screens/savedPicture';
import CameraScreen from '../screens/CameraScreen';

const Stack = createStackNavigator()
export default AppNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown:false}}>
                <Stack.Screen name = 'Main' component = {MainScreen}/>
                <Stack.Screen name = 'Save' component = {SavedPicture}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}