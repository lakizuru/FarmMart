import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import "react-native-gesture-handler";
import React from "react";

//importing screens
import Lang from "./screens/Lang";
import Login from "./screens/Login";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Search from "./screens/Search";
import NewPost from "./screens/NewPost";
import Settings from "./screens/Settings";
import Recovery from "./screens/Recovery";
import DetailedView from "./screens/DetailedView";
import SearchResults from "./screens/SearchResults";
import MyPosts from "./screens/MyPosts";

export default function App() {
  const Stack = createStackNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: Platform.OS === "android" ? false : true,
        }}
      >
        <Stack.Screen name="Language" component={Lang}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen name="New Post" component={NewPost}></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        <Stack.Screen
          name="Account Recovery"
          component={Recovery}
        ></Stack.Screen>
        <Stack.Screen
          name="Detailed View"
          component={DetailedView}
        ></Stack.Screen>
        <Stack.Screen
          name="Search Results"
          component={SearchResults}
        ></Stack.Screen>
        <Stack.Screen name="My Posts" component={MyPosts}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
