import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {

    const {logout, authState} = useContext(AuthContext)

    return (
        <View style = {styles.globalMargin}>
            <Text style={styles.title}>Album Screen</Text>
            {
                authState.isLoggedIn && <Button title = 'logout' onPress = {logout}
            />
            }
            
        </View>
    )
}
