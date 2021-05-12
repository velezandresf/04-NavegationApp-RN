import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from './src/navigator/SideMenu';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <SideMenu/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children}: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;
