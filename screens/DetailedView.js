import { StatusBar } from "expo-status-bar";
//import React from "react";
//import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import firebase from "../firebaseDb";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ActivityIndicator,
  FlatList,
} from "react-native";
//import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

export default function DetailedView({ Navigation, route }) {
  const { lang, doc } = route.params;

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    const subscriber = firebase.firestore().collection('Posts').doc(doc).onSnapshot(querySnapshot => {
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
      <Text style={{ fontSize: 36 }}>Post Details</Text>

    

      <View style = {{width: '95%'}} >
      <FlatList
    data={posts}
    renderItem={({ item }) => (
      
        <View style={styles.rowContainer}>
        <Text style = {styles.itemTitle}>{item.title}</Text>
        <Text style={{color:"lightgreen"}}>h</Text>
        <Text>Description</Text>
        <Text>{item.description}</Text>
        <Text style={{color:"lightgreen"}}>f</Text>
        <Text>Price per {item.unit}: LKR {item.price}</Text>
        <Text>Qty: {item.qty} {item.unit}</Text>
        <Text>Phone Number:{item.user}</Text>
        <Text>Location: {item.area}, {item.district}</Text>

      </View>
      
      
    )}
    />

      </View>
    </View>
  );

  }

  /*return (
    <View>
      <Text style={{ fontSize: 36 }}>
        THIS SCREEN IS STILL UNDER DEVELPMENT
        Post: {doc}
      </Text>
    </View>
  );
  */
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
  
  
  itemTitle: {
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: 'white'
  },

});


