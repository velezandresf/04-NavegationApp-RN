import { DrawerScreenProps } from '@react-navigation/drawer';
//import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const page1Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions ({
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.globalMargin}
                    onPress= { () => navigation.toggleDrawer()}
                >
                    <Text><Icon name={ 'reorder-three-outline' } size={30} color={colors.primary} /></Text>
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page 1 Screen</Text>

            <Button
                title="go to page 2"
                onPress= {() => navigation.navigate('page2Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize:20
            }}>Navigate with arguments</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style = {{ 
                        ...styles.bigButton,
                        backgroundColor: '#5856D6' 
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Andres'
                    })}    
                >
                    <Text style={styles.bigButtonText}>Andres</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {{ 
                        ...styles.bigButton,
                        backgroundColor: '#FF9427' 
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Felipe'
                    })}    
                >
                    <Text style={styles.bigButtonText}>Felipe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
