import React,  {createContext, useReducer} from "react";
import { signInReducer } from "../reducer/auth_reducer";

export const SignInContext = createContext();

export const SignInContextProvider = (props) => {

const [signedIn , dispatchSignIn] = useReducer(signInReducer, {userToken: null})
 return(
    <SignInContext.Provider value = {{signedIn, dispatchSignIn}}>
       {props.children}
    </SignInContext.Provider>
 )

}