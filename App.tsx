import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./global.css";
import { Login, Register, Welcome } from "./screens"; // On retire Home car il sera dans HomeTabs
import HomeTabs from "./screens/HomeTabs"; // Importez HomeTabs qui contient les onglets
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import Profil from "./screens/Profil";
import Sinistres from "./screens/Sinistres";
import AutoHabitat from "./screens/Assurances/AutoHabitat";
import AutoVie from "./screens/Assurances/AutoVie";
import AutoImmo from "./screens/Assurances/AutoImmo";
import AutoInsurance from "./screens/Assurances/AutoInsurance";
import AutoVoyage from "./screens/Assurances/AutoVoyage";
import Automobile from "./screens/Assurances/Automobile";
import Autosanté from "./screens/Assurances/Autosanté";
import AutoPerso from "./screens/Assurances/AutoPerso";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AutoHabitat"
          component={AutoHabitat}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AutoImmo"
          component={AutoImmo}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AutoInsurance"
          component={AutoInsurance}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AutoVie"
          component={AutoVie}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="AutoVoyage"
          component={AutoVoyage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Automobile"
          component={Automobile}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Autosanté"
          component={Autosanté}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AutoPerso"
          component={AutoPerso}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profil"
          component={Profil}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Sinistres"
          component={Sinistres}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs} // Utilisez HomeTabs ici
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
