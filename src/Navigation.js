import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoodlesList from "./containers/NoodlesList";
import NoodlesDetails from "./containers/NoodlesDetails";

const Stack = createNativeStackNavigator();

export default class AppNavigation extends Component {

    render(){      
        return (            
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Noodles" component={NoodlesList} />
                    <Stack.Screen name="NoodlesDetails" component={NoodlesDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}