import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const page3Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page 3 Screen</Text>

            <Button
                title="back"
                onPress= {() => navigation.pop()}
            />

            <Button
                title="go to page 3"
                onPress= {() => navigation.popToTop()}
            />
        </View>
    )
}
