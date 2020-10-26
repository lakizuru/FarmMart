import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
import firebase from "../firebaseDb";

export default function Home({ route, navigation }) {
  const { lang, user } = route.params; // gets the preffered language to the screen

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    const subscriber = firebase.firestore().collection('Posts').onSnapshot(querySnapshot => {
      const posts = [];

      querySnapshot.forEach(documentSnapshot => {
        posts.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id, 
        });
      });

      setPosts(posts);
      setLoading(false);

    });

    return () => subscriber();
  }, []);

  if (loading){
    return <ActivityIndicator/>
  }
  
  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>HOME</Text>

      <Text style={{ fontSize: 18 }}>
        Find what you need from {posts.length} posts...
      </Text>

<FlatList
    data={posts}
    renderItem={({ item }) => (
      <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue', borderColor: 'dodgerblue' }}>
        <Text style = {styles.itemTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    )}
    />

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
  itemTitle: {
    fontSize: 20,
  },

});
