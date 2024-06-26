import React , {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigation";
import { SignInContext } from "../context/auth_Context";
import AppStack from "./appStack";

export default  function RootNavigator() {

    const {signedIn} = useContext(SignInContext)

    return(
        <NavigationContainer>
                {signedIn.userToken === null ? <AuthStack/> : <AppStack/>} 
        </NavigationContainer>
    )
}

