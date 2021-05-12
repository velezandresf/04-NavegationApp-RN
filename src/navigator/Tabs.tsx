import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTab } from './TopTab';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios' 
            ? <TabsIOS /> 
            : <TabsAndroid />
} 


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colors.primary
        }}
        screenOptions= { ({ route }) => ({
            tabBarIcon: ( {color, focused }) => {
                let iconName: string = '';

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'home-outline'
                        break;
                    case 'TopTab':
                        iconName = 'stop-outline'
                        break;
                    case 'StackNavigator':
                        iconName = 'file-tray-stacked-outline'
                        break;
                    default:
                        break;
                }

                return <Text> <Icon name={ iconName } size={20} color={colors.primary} />   </Text>
            }
        })}
    >
        <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
        <BottomTabAndroid.Screen name="TopTab" options={{ title: 'TopTab' }} component={TopTab} />
        <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle= {{
            backgroundColor: 'white'
        }}
        tabBarOptions= {{  
            activeTintColor: colors.primary,
            style: {
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            labelStyle: {
                fontSize: 15
            }
        }}
        screenOptions= { ({ route }) => ({
            tabBarIcon: ( {color, focused, size }) => {
                let iconName: string = '';

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'home-outline'
                        break;
                    case 'TopTab':
                        iconName = 'stop-outline'
                        break;
                    case 'StackNavigator':
                        iconName = 'file-tray-stacked-outline'
                        break;
                    default:
                        break;
                }

                return <Text> <Icon name={ iconName } size={20} color={colors.primary} />   </Text>
            }
        })}
    >
        {/* <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text> }} component={Tab1Screen} /> */}
        <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
        <BottomTabIOS.Screen name="TopTab" options={{ title: 'TopTab' }} component={TopTab} />
        <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}