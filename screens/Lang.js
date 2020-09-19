import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Lang({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login", { lang: sin })}
        >
          <Text style={styles.btnText}>සිංහල</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login", { lang: tam })}
        >
          <Text style={styles.btnText}>தமிழ்</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login", { lang: eng })}
        >
          <Text style={styles.btnText}>English</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#fb5b5a",
    width: 200,
  },
  btnText: {
    fontSize: 48,
    textAlign: "center",
    color: "white",
  },
  container: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#003f5c",
  },
});

const sin = {
  login: {
    Greet: "ආයුබෝවන්!",
  },
};

const tam = {
  login: {
    Greet: "வணக்கம்!",
  },
};

const eng = {
  login: {
    Greet: "Welcome!",
  },
};
