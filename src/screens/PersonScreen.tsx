import React, { useEffect, useContext } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ( {navigation, route}: Props) => {
    
    const params = route.params;

    const {changeUsername} = useContext(AuthContext)

    useEffect(() => {
       navigation.setOptions({
           title: params.name
       })
    }, []);

    useEffect(() => {
       changeUsername(params.name); 
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                { JSON.stringify(params, null, 3)}
            </Text>
            
        </View>
    )
}

