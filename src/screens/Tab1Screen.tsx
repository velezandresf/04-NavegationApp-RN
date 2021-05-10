import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {

    useEffect(() => {
        console.log("tab1Screen")
    }, [])
    
    return (
        <View>
            <Text>Tab1 Screen</Text>
        </View>
    )
}
