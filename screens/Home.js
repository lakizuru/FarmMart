import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>
        THIS SCREEN IS STILL UNDER DEVELPMENT
      </Text>

      <View style={styles.post}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={{ color: "white", fontSize: 24 }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("New Post")}>
          <Text style={{ color: "white", fontSize: 24 }}>New Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={{ color: "white", fontSize: 24 }}>Search</Text>
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
  },
  post: {
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
