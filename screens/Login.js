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
  Image,
} from "react-native";

import logoImg from "../assets/icon.png";

function logIn(pCred, navigation, lang) {
  const user = firebase.firestore().collection("Users").doc(pCred.phone);

  //const data = { name: "", district: "", area: "", password: "" };

  user
    .get()
    .then(function (doc) {
      if (doc.exists) {
        const { name, district, area, password } = doc.data();
        if (pCred.password == password) {
          navigation.navigate("Home", {
            lang: lang,
          });
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        // navigation.navigate("Search Results", {
        //   lang: lang,
        // });
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

export default function Login({ route, navigation }) {
  const [cred, setCred] = useState({
    phone: "",
    password: "",
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
      <Text style={styles.greet}> {lang.login.greet}</Text>
      <Image source={logoImg} style={styles.image} />

      <View style={styles.inputView}>
        <TextInput
          //maxLength="10"
          style={styles.inputText}
          placeholder={lang.login.phone}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setCred({ phone: text })}
          //enablesReturnKeyAutomatically="true"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder={lang.login.password}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setCred({ password: text })}
          secureTextEntry
          //enablesReturnKeyAutomatically="true"
          textContentType="password"
          //maxLength="16"
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        //onPress={() => Push_data(phone, password)}
        onPress={() => logIn(cred, navigation, lang)}
        //onPress={() => navigation.navigate("Home", { lang: lang })}
      >
        <Text style={{ fontSize: 24, color: "white" }}>
          {lang.login.loginBtn}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account Recovery")}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {lang.login.forgotPW}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {lang.login.signUpBtn}
        </Text>
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
  image: {
    width: 150,
    height: 150,
  },
  greet: {
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
  logo: {
    width: 80,
    height: 80,
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
