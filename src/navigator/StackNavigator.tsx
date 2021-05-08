import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { page1Screen } from '../screens/page1Screen';
import { page2Screen } from '../screens/page2Screen';
import { page3Screen } from '../screens/page3Screen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  page1Screen: undefined,
  page2Screen: undefined,
  page3Screen: undefined,
  PersonScreen: {id: number, name: string},
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="page2Screen"
      //headerShown= false

      screenOptions= {{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="page1Screen" options={{ title: "Page 1"}} component={page1Screen} />
      <Stack.Screen name="page2Screen" options={{ title: "Page 2"}} component={page2Screen} />
      <Stack.Screen name="page3Screen" options={{ title: "Page 3"}} component={page3Screen} />
      <Stack.Screen name="PersonScreen" options={{ title: "Person"}} component={PersonScreen}/>
    </Stack.Navigator>
  );
}