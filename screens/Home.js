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
  AsyncStorage
} from "react-native";
import firebase from "../firebaseDb";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { sin, tam, eng } from '../lang';

export default function Home({ route, navigation }) {
  const {lang} = route.params;

  const [langIn, setLangIn] = useState();

  //var lang;

  const [user, setUser] = useState();
  const [fname, setFname] = useState();
  const [district, setDistrict] = useState();
  
  async function getSession () {
    await AsyncStorage.getItem('lang').then((lang) => setLangIn(lang));
    await AsyncStorage.getItem('phone').then((phone) => setUser(phone));
    await AsyncStorage.getItem('fname').then((fname) => setFname(fname));
    await AsyncStorage.getItem('district').then((district) => setDistrict(district));
  }

  getSession();

  // if (langIn == 'sin'){
  //   lang = sin;
  // }
  // else if (langIn == 'tam'){
  //   lang = tam;
  // }
  // else if (langIn == 'eng'){
  //   lang = eng;
  // }
  
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
      
  <Text style={{ fontSize: 36, color: 'green', fontWeight: 'bold'  }}>{lang.home.title}</Text>

<Text style={{ fontSize: 18}}>
{lang.home.subtitle1}{fname}{lang.home.subtitle2}{posts.length}{lang.home.subtitle3}
</Text>      

      <ScrollView style = {{width: '95%'}}>
     
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

      </ScrollView>

      <View style={styles.bar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings", { lang: lang, user: user })}
        >
          <Text style={styles.barText}>⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("My Posts", { lang: lang, userlogged: user })}
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
    color: 'green',
    flex: 0.1,
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 0,
    width: "100%",
    //backgroundColor: "dodgerblue",
    backfaceVisibility: 'visible',
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
