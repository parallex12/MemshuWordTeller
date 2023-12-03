import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "./routes/AppNavigator";
import { useFonts } from "expo-font";
import store from "./state-management/store";
import "react-native-gesture-handler";
import { FontsConfig } from "./middleware";
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import axios from "axios";
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const [fontsLoaded] = useFonts(FontsConfig);
  axios.defaults.baseURL = "https://www.memshu.com/api";
  axios.defaults.headers.common["Authorization"] = `Bearer bc33251e-7983-46cf-9838-9e9bca7a370e`;
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <StatusBar style="dark" hidden  />
      <AppNavigator />
    </Provider>
  );
}
