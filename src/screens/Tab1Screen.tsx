import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
                <Icon name="airplane-outline" size={80} color={colors.primary} />
                <Icon name="attach-outline" size={80} color={colors.primary} />
                <Icon name="bonfire-outline" size={80} color={colors.primary} />
                <Icon name="calculator-outline" size={80} color={colors.primary} />
                <Icon name="cloudy-night-outline" size={80} color={colors.primary} />
            </Text>
        </View>
    )
}
