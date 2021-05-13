import React, { createContext, useReducer } from "react"
import { AuthReducer } from './AuthReducer';

//define the information
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//initial state
export const AuthInitialState: AuthState = {
    isLoggedIn: false,
    // username: undefined,
    // favoriteIcon: undefined
}

// tell react what to expose in the context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

//create the context
export const AuthContext = createContext({} as AuthContextProps);

//provided component of the state
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(AuthReducer, AuthInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'});
    }

    const logout = () => {
        dispatch({type:'logout'});
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch( {type: 'changeFavIcon', payload: iconName});
    }

    const changeUsername = (username: string) => {
        dispatch( {type: 'changeUsername', payload: username})
    }

    return (
        <AuthContext.Provider value = {{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}