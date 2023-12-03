import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TakePicture from "../screens/TakePicture/TakePicture";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import ListenAudio from "../screens/ListenAudio/ListenAudio";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="TakePicture" component={TakePicture} />
      <Screen name="ListenAudio" component={ListenAudio} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
