import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab3Screen = () => {

    useEffect(() => {
        console.log("tab3Screen")
    }, [])

    return (
        <View>
            <Text>Tab3 Screen</Text>
        </View>
    )
}
