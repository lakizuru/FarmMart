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
} from "react-native";
//import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

export default function DetailedView({ Navigation, route }) {
  const { lang, doc } = route.params;

  const [pTitle, setPTitle] = useState();
  const [pDiscription, setPDiscription] = useState();
  const [pLName, setPLName] = useState();
  const [pArea, setPArea] = useState();
  const [pCategory, setPCategory] = useState();
  const [pDistrict, setPDistrict] = useState();
  const [pPrice, setPPrice] = useState();
  const [pQty, setPQty] = useState();
  const [pUnit, setPUnit] = useState();

  const [uFName, setUFName] = useState();
  const [uLName, setULName] = useState();
  const [user, setUser] = useState();
  const [uArea, setUArea] = useState();
  const [uDistrict, setUDistrict] = useState();

    const Post = firebase.firestore().collection("Posts").doc(doc);

  Post.get().then(function(post){
    const {area, category, discription, district, price, qty, title, unit, user} = post.data();

    setPTitle(title);
    setUser(user);
    setPDiscription(discription);
    setPArea(area);
    setPCategory(category);
    setPDistrict(district);
    setPPrice(price);
    setPQty(qty);
    setPUnit(unit);

    const User = firebase.firestore().collection("Users").doc(user);

    User.get().then(function(publisher){
      const { area, district, fname, lname, password } = publisher.data();

      setUFName(fname);
      setULName(lname);
      setUArea(area);
      setUDistrict(district);
  });
});

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>{pTitle}</Text>
      <Text style = {{fontSize: 36}}></Text>
    <View>
    <Text>{pCategory}</Text>
     <Text>Price per {pUnit}: {pPrice}</Text>
     <Text>Qty: {pQty} {pUnit}</Text>
     <Text>Location: {pArea}, {pDistrict}</Text>
    </View>
     
    <Text style = {{fontSize: 36}}></Text>

     <View>
     <Text>Seller Information</Text>     
     <Text>Seller: {uFName} {uLName}</Text>
     <Text>From: {uArea}, {uDistrict}</Text>
    <Text>Phone: {user}</Text>

     </View>
     
    
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },});
  



