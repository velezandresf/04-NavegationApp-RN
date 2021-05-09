import React from 'react'

import { 
    createDrawerNavigator, 
    DrawerContentComponentProps, 
    DrawerContentOptions, 
    DrawerContentScrollView 
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Text, useWindowDimensions, View } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType = { width >= 768 ? 'permanent': 'front'}
            drawerContent={ (props) => <SelfMenu {...props} /> }
        >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

const SelfMenu = ( {navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Image 
                    source={{
                        uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Menu options */}
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress= {() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuText}>Navigation</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress= {() => navigation.navigate('SettingScreen')}
                >
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}