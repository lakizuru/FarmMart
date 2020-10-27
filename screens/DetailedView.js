import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DetailedView({ Navigation, route }) {
  const { lang, doc } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 36 }}>
        THIS SCREEN IS STILL UNDER DEVELPMENT
        Post: {doc}
      </Text>
    </View>
  );
}
