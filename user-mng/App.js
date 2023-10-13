import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import { Provider } from "react-redux";
import StackNavigator from "./navigation/StackNavigation";

export default function App() {
  return (
    <>
        <StackNavigator />
    </>
  );
}

