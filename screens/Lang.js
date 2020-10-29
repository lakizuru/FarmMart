import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { sin, tam, eng } from "../lang";

export default function Lang({ navigation }) {

  const [user, setUser] = useState(null);
  const [langIn, setLangIn] = useState();

  //var lang;

  async function checkSession(){
    AsyncStorage.getItem('phone').then((phone) => setUser(phone));
    AsyncStorage.getItem('lang').then((lang) => setLangIn(lang)); 

    // if (lang == null){
    //   AsyncStorage.getItem('lang').then((lang) => setLangIn('eng')); 
    // }

  }

  checkSession();

  if (user){
    if (langIn == 'sin'){
      var lang = sin;
    }
    else if (langIn == 'tam'){
      var lang = tam;
    }
    else if (langIn == 'eng'){
      var lang = eng;
    }
    else if (langIn == null){
      var lang = eng;
    }

  
    console.log(user);
    console.log(langIn);

    //var lang = sin;

    return (
      <View style = {{alignItems: "center", flex: 1, justifyContent: "center",}}>
        <TouchableOpacity
          style={{padding: 15, borderRadius: 50, backgroundColor: "green", width: '12%', }}
          onPress={() => {
            navigation.navigate("Home", { lang: lang }),
            AsyncStorage.setItem('lang', langIn)
          }}
        >
          <Text style={styles.btnText}>➡️</Text>
        </TouchableOpacity>
      </View>
    );

  } 

  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <Text style = {{fontSize: 28}}>භාෂාව / மொழி / Language</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login", { lang: sin });
            AsyncStorage.setItem('lang', 'sin');
          }}
        >
          <Text style={styles.btnText}>සිංහල</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login", { lang: tam })
            AsyncStorage.setItem('lang', 'tam');
          }
        }
        >
          <Text style={styles.btnText}>தமிழ்</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => 
            {
              navigation.navigate("Login", { lang: eng })
              AsyncStorage.setItem('lang', 'eng');
            }}
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
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "green",
    width: '100%'
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
    backgroundColor: "lightgreen",
    width: '75%'
  },
});
