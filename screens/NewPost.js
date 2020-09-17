import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function NewPost({ Navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>
        THIS SCREEN IS STILL UNDER DEVELPMENT
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
