import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import Register from "../components/Register";
import ProfileDetails from "../components/ProfileDetails";
import Profile from "../components/Profile";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ProfileDetails" component={ProfileDetails}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
