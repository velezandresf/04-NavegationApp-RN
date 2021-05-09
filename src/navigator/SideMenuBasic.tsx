import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenuBasic = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            //drawerPosition= 'right'
            drawerType = { width >= 768 ? 'permanent': 'front'}
        >
        <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
        <Drawer.Screen name="SettingScreen" options={{ title: 'Settings' }} component={SettingScreen} />
        </Drawer.Navigator>
    );
}