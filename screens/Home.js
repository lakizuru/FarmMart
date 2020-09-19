import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function Home({ route, navigation }) {
  //const { cat } = route.params; //Category

  const { lang } = route.params; // gets the preffered language to the screen

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>
        THIS SCREEN IS STILL UNDER DEVELPMENT
      </Text>

      <View style={styles.bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={{ color: "white", fontSize: 24 }}>
            {lang.home.settings}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("New Post")}>
          <Text style={{ color: "white", fontSize: 24 }}>New Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={{ color: "white", fontSize: 24 }}>
            {lang.home.search}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  bar: {
    flex: 0.1,
    height: "10%",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "dodgerblue",
    flexDirection: "row",
  },
});
