import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


//importar pantalla principal


const Stack = createStackNavigator();
import LogInP2 from "./Login/LogInP2";
import Navegation from "../Navegation";
import CrearCuenta from "./Login/CrearCuenta";


function MyStackLogin () {
    return (
       <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} 
        name="Login" component={LogInP2}/>
        <Stack.Screen options={{headerShown:false}} 
        name="Crear cuenta" component={CrearCuenta}/>
        <Stack.Screen options={{headerShown:false}} 
        name="Dash" component={Navegation}/>
       </Stack.Navigator>
    )
}


export default function Navegation2 () {
    return(
        <NavigationContainer>
         <MyStackLogin/>
        </NavigationContainer>
    )
}