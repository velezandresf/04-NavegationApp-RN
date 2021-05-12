import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { AlbumScreen } from '../screens/AlbumScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
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
                    iconName = 'albums-outline'
                    break;
                case 'ContactsScreen':
                    iconName = 'people-outline'
                    break;
                case 'ChatScreen':
                    iconName = 'chatbox-ellipses-outline'
                    break;
                default:
                    break;
            }

            return <Text> <Icon name={ iconName } size={20} color={colors.primary} />   </Text>
        }
    })}
    >
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
    </Tab.Navigator>
  );
}