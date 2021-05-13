import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
    
    const {top} = useSafeAreaInsets();

    useEffect(() => {
        console.log("tab1Screen")
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={{
                ...styles.title,
                marginTop: top + 10
            }}> 
                Icons 
            </Text>

            <Text>
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="attach-outline"  />
                <TouchableIcon iconName="bonfire-outline"  />
                <TouchableIcon iconName="calculator-outline"  />
                <TouchableIcon iconName="cloudy-night-outline"  />,
            </Text>
        </View>
    )
}
