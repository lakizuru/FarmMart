import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  AsyncStorage
} from "react-native";
import firebase from "../firebaseDb";

export default function MyPosts({ route, navigation }) {
  const [lang, setLang] = useState();
  const [user, setUser] = useState();

  async function getSession () {
    await AsyncStorage.getItem('lang').then((lang) => setLang(lang));
    await AsyncStorage.getItem('phone').then((phone) => {
      const subscriber = firebase.firestore().collection('Posts').where('user', '==', phone).onSnapshot(querySnapshot => {
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
    });
  }

  getSession();

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
      <Text style={{ fontSize: 36 }}>My Posts</Text>

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
  post:{
    backgroundColor: 'lightgreen',
    borderStyle: "solid",    
    borderRadius: 15,
    justifyContent: "space-around"
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
