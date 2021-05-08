import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const page2Screen = () => {
    
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hello World',
            headerBackTitle: 'Back'
        })
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page 2 Screen</Text>

            <Button
                title="go to page 3"
                onPress= {() => navigator.navigate('page3Screen')}
            />
        </View>
    )
}
