import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchResults({ route, navigation }) {
  const keyword = "keyword";
  const { lang } = route.params; // gets the preffered language, keyword to the screen

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Search Results for</Text>
      <Text style={{ fontSize: 36 }}>"{keyword}"</Text>

      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? 35 : 0,
    alignItems: "center",
  },
});
