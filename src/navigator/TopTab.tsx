import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { AlbumScreen } from '../screens/AlbumScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  
  const {top} = useSafeAreaInsets();
  
  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle:{
          backgroundColor: colors.primary
        },
        style: {
          borderTopColor: colors.primary,
          shadowColor: 'transparent',
          elevation: 0
        }
      }}
      screenOptions= { ({ route }) => ({
        tabBarIcon: ( {color, focused }) => {
            let iconName: string = '';

            switch (route.name) {
                case 'AlbumScreen':
                    iconName = 'AS'
                    break;
                case 'ContactsScreen':
                    iconName = 'CO'
                    break;
                case 'ChatScreen':
                    iconName = 'CS'
                    break;
                default:
                    break;
            }

            return <Text style={{ color }}> { iconName } </Text>
        }
    })}
    >
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
    </Tab.Navigator>
  );
}