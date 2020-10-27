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
  Alert
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

import logoImg from "../assets/icon.png";

function logIn(phone, pass, navigation, lang) {
  const user = firebase.firestore().collection("Users").doc(phone);

  user
    .get()
    .then(async function (doc) {
      if (doc.exists) {
        const { area, district, fname, lname, password } = doc.data();
        //console.log(password);
        if (password == pass) {
         
            await AsyncStorage.setItem('phone', doc.id);
            await AsyncStorage.setItem('area', area);
            await AsyncStorage.setItem('district', district);
            await AsyncStorage.setItem('fname', fname);
            await AsyncStorage.setItem('lang', lang);
            console.log(fname);
           navigation.navigate("Home" /*, {
             lang: lang, user: doc.id, fname: fname, district: district
           }*/);
        }
        else{
          //Invalid Password
          Alert.alert('Invalid Password!', 'The password you entered is invalid.', [{text: 'OK', onPress: () => console.log('OK Pressed') }, {text: 'Forgot Password', onPress: () => navigation.navigate("Account Recovery")}], {cancelable: true})
        }
      } else {
        //No account exists
        Alert.alert('Account Not Found!', 'The credentials you entered do not match with any existing account.', [{text: 'OK', onPress: () => console.log('OK Pressed') }, {text: 'Create New Account', onPress: () => navigation.navigate("SignUp")}], {cancelable: true})
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

export default function Login({ route, navigation }) { 
  
  var { lang } = route.params;

  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      {/* <View style={styles.langBar}>
        <TouchableOpacity
          style={styles.langButton}
          onPress={() => navigation.navigate("Login", { lang: sin })}
        >
          <Text style={styles.btnText}>සි</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => navigation.navigate("Login", { lang: tam })}
        >
          <Text style={styles.btnText}>த</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => navigation.navigate("Login", { lang: eng })}
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
          textContentType="password"
          //maxLength="16"
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => logIn(phone, password, navigation, lang)}
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
