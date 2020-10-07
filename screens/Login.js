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
  Button,
} from "react-native";

// GoogleSignin.configure({
//   webClientId: '253159788629-473o4b6oc3popct4f2b31tkkpf82kr64.apps.googleusercontent.com',
// });

// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

// function GoogleSignIn() {
//   return (
//     <Button
//       title="Google Sign-In"
//       onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//     />
//   );
// }

function Push_data(ffname, lname) {
  const dbRef = firebase.firestore().collection("users");
  dbRef
    .add({
      fname: ffname,
      surename: lname,
    })
    .then((res) => {
      console.log(res.id);
    });
}

export default function Login({ route, navigation }) {
  const [phone, setPhone] = useState({
    phone: "123",
  });
  const [password, setPassword] = useState({
    password: "abc",
  });

  const Login = () => {};

  const { lang } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> {lang.login.greet}</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder={lang.login.phone}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPhone(text)}
          //enablesReturnKeyAutomatically="true"
          //maxLength="10"
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
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => Push_data("Lakisuru", "Semasinghe")}
        // onPress={() => navigation.navigate("Home", { lang: lang })}
      >
        <Text style={styles.loginText}>ADD DATA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Account Recovery")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.loginText}>Signup</Text>
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
});
