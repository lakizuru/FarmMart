import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import firebase from "../firebaseDb";
import { TouchableHighlight } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({ route, navigation }) {
  //const { lang, user, fname, district } = 'route.params';
  const [lang, setLang] = useState();
  const [user, setUser] = useState();
  const [fname, setFname] = useState();
  const [district, setDistrict] = useState();
  
  async function _getData () {
    await AsyncStorage.getItem('lang').then((lang) => setLang(lang));
    await AsyncStorage.getItem('phone').then((phone) => setUser(phone));
    await AsyncStorage.getItem('fname').then((fname) => setFname(fname));
    await AsyncStorage.getItem('district').then((district) => setDistrict(district));
  }

  _getData();

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
  Hi, {fname}. Find what you need from {posts.length} posts...
      </Text>

      <View style = {{width: '95%'}} >
      <FlatList
    data={posts}
    renderItem={({ item }) => (
      <TouchableHighlight underlayColor= 'lightblue' style = {styles.post} onPress={() => navigation.navigate("Detailed View", { lang: lang, doc: item.key })}>
        <View style={styles.rowContainer}>
        <Text style = {styles.itemTitle}>{item.title}</Text>
        <Text>{item.category}</Text>
        <Text>Price per {item.unit}: LKR {item.price}</Text>
        <Text>Qty: {item.qty} {item.unit}</Text>
        <Text>Location: {item.area}, {item.district}</Text>
      </View>
      </TouchableHighlight>
      
    )}
    />

      </View>

      <View style={styles.bar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings", { lang: lang, user: user })}
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
  post:{
    backgroundColor: 'lightgreen',
    borderStyle: "solid",    
    borderRadius: 15,
    justifyContent: "space-around"
  },
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
  rowContainer: {
    flexDirection: 'column',
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: 'white'
  },

});
