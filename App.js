import React from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import PeopleList from "./src/pages/peoplelist";
import EditUser from "./src/pages/edituser";
import UserView from "./src/pages/userview";

const Stack = createNativeStackNavigator();

export default function App () {
  const navigationRef = React.useRef();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Peoplelist" screenOptions={{
          headerShown:false
        }}> 
          <Stack.Screen name="PeopleList" component={PeopleList} />
          <Stack.Screen name="EditUser" component={EditUser} />
          <Stack.Screen name="UserView" component={UserView} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
 container: {
      
  flex:1,
  width:"100%"
  

 }    
  });


