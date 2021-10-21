import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../Components/MainScreen';
import { UpdateScreen } from '../Components/UpdateScreen';


export const Navigation = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
