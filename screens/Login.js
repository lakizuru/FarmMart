import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import firebase from "../firebaseDb";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function logIn(pPhone, pPassword, navigation, lang) {
  const user = firebase.firestore().collection("Users").doc(pPhone);

  user
    .get()
    .then(function (doc) {
      if (doc.exists) {
        navigation.navigate("Home", {
          lang: lang,
          user: toString(doc.data().password),
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

export default function Login({ route, navigation }) {
  const [phone, setPhone] = useState({
    phone: "0",
  });
  const [password, setPassword] = useState({
    password: "test",
  });

  const { lang } = route.params;

  const [langNew, setLangNew] = useState({
    langNew: "eng",
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.langBar}>
        <TouchableOpacity
          style={styles.langButton}
          onPress={() => setLangNew("sin")}
        >
          <Text style={styles.btnText}>සි</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => setLangNew("tam")}
        >
          <Text style={styles.btnText}>த</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => setLangNew("eng")}
        >
          <Text style={styles.btnText}>E</Text>
        </TouchableOpacity>
      </View> */}
      <Text style={styles.logo}> {lang.login.greet}</Text>

      <View style={styles.inputView}>
        <TextInput
          //maxLength="10"
          style={styles.inputText}
          placeholder={lang.login.phone}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPhone(text)}
          //enablesReturnKeyAutomatically="true"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder={lang.login.password}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          //enablesReturnKeyAutomatically="true"
          textContentType="password"
          //maxLength="16"
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        //onPress={() => Push_data(phone, password)}
        onPress={() => logIn(phone, password, navigation, lang)}
        //onPress={() => navigation.navigate("Home", { lang: lang })}
      >
        <Text style={{ fontSize: 24, color: "white" }}>
          {lang.login.loginBtn}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Account Recovery")}>
        <Text style={{ fontSize: 20 }}>{lang.login.forgotPW}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={{ fontSize: 20 }}>{lang.login.signUpBtn}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputText: {
    height: 50,
    fontSize: 24,
    color: "white",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  forgot: {
    color: "white",
    ///fontSize: 11,
  },
  loginBtn: {
    width: "75%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  langBar: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-around",
  },
  langButton: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#fb5b5a",
    width: 20,
  },
});
