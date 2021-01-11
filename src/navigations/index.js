import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen'
import TakePhoto from '../screens/TakePhoto';
import CameraScreen from '../screens/CameraScreen';

const Stack = createStackNavigator()
export default AppNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown:false}}>
                {/* <Stack.Screen name = 'Photo' component = {TakePhoto}/>  */}
                {/* <Stack.Screen name = 'Camera' component = {CameraScreen}/> */}
                <Stack.Screen name = 'Main' component = {MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}