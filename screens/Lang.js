import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { sin, tam, eng } from "../lang";

export default function Lang({ navigation }) {

  const [user, setUser] = useState();
  
  // async function getSession(){
  //   await AsyncStorage.getItem('phone').then((phone) => setUser(phone));
  // }

  // useEffect(() => {
  //   getSession();
  // })

  //AsyncStorage.getItem('phone').then((phone) => setUser(phone));

  //if (user == null){
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
  // }

  //   else {
  //     return( 
  //       navigation.navigate('Home')
  //       );
  //   }


  
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
    borderRadius: 50,
    backgroundColor: "#fb5b5a",
    width: '75%',
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
    width: '75%'
  },
});
