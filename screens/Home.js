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

export default function Home({ route, navigation }) {
  //const { cat } = route.params; //Category

  const { lang, user } = route.params; // gets the preffered language to the screen

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

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
      <Text style={{ fontSize: 36 }}>{user}</Text>

      <ScrollView>
        {/* <FlatList
          style={{ flex: 1 }}
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post {...item} />}
        /> */}
      </ScrollView>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={{ color: "white", fontSize: 24 }}>
            {lang.home.settings}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("New Post")}>
          <Text style={{ color: "white", fontSize: 24 }}>New Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={{ color: "white", fontSize: 24 }}>
            {lang.home.search}
          </Text>
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
  },
  bar: {
    flex: 0.1,
    height: "10%",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "dodgerblue",
    flexDirection: "row",
  },
});
