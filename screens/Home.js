import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import firebase from "../firebaseDb";
import Posts from "../Post";

function count() {
  firebase
    .firestore()
    .collection("Posts")
    .get()
    .then((querySnapshot) => {
      setCount(querySnapshot.size);
    });
}

export default function Home({ route, navigation }) {
  //const { cat } = route.params; //Category

  const { lang, user } = route.params; // gets the preffered language to the screen

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const postSet = firebase.firestore().collection("Posts");
    return postSet.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {
          title,
          category,
          description,
          price,
          unit,
          quantity,
          area,
          district,
        } = doc.data();
        list.push({
          id: doc.id,
          category,
          description,
          price,
          unit,
          quantity,
          area,
          district,
        });
      });
    });
  }, []);

  // if (loading) {
  //   return null; // or a spinner
  // }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>HOME</Text>

      <Text style={{ fontSize: 18 }}>
        Find what you need from {count} posts...
      </Text>

      <View style={styles.bar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings", { lang: lang })}
        >
          <Text style={styles.barText}>⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("My Posts", { lang: lang })}
        >
          <Text style={styles.barText}>🗒️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("New Post", { lang: lang })}
        >
          <Text style={styles.barText}>📝</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { lang: lang })}
        >
          <Text style={styles.barText}>🔎</Text>
        </TouchableOpacity>
      </View>
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
  bar: {
    flex: 0.1,
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "dodgerblue",
    flexDirection: "row",
  },
  barText: {
    fontSize: 60,
    color: "white",
  },
});
