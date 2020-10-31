import React, { useState} from "react";
import "react-native-gesture-handler";
import firebase from "../firebaseDb";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from "react-native";
//import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

export default function DetailedView({ Navigation, route }) {
  const { lang, doc } = route.params;

  const [pTitle, setPTitle] = useState();
  const [pDescription, setPDescription] = useState();
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
    const {area, category, description, district, price, qty, title, unit, user} = post.data();

    setPTitle(title);
    setUser(user);
    setPDescription(description);
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
      <View style = {styles.card}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{pTitle}</Text>

      <Text style = {{fontSize: 0}}></Text>

      <Text style = {{fontSize: 28, fontStyle: 'italic', color: 'grey'}}>{pCategory}</Text>

      <Text style = {{fontSize: 24}}></Text>

    <View style= {styles.subCard}>
    <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Product Description</Text>
  <Text>{pDescription}</Text>
    </View>

    <Text style = {{fontSize: 24}}></Text>

<View style = {styles.subCard}>
<Text style = {{fontSize: 18, fontWeight: 'bold'}}>Product Information</Text>
     <Text>Price per {pUnit}: LKR {pPrice}</Text>
     <Text>Qty: {pQty} {pUnit}</Text>
     <Text>Location: {pArea}, {pDistrict}</Text>
    </View>
     
    <Text style = {{fontSize: 24}}></Text>

     <View style= {styles.subCard}>
     <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Seller Information</Text>     
     <Text>Seller: {uFName} {uLName}</Text>
     <Text>From: {uArea}, {uDistrict}</Text>
    <Text>Phone: {user}</Text>
      </View>
      
      <Text style = {{fontSize: 24}}></Text>

     </View>

     <View style = {{width: '100%', alignItems:'center', borderRadius: 25, backgroundColor: 'red', borderColor: 'red', borderWidth: 15, width: '90%'}}>
    {/* <Text style = {{fontWeight: 'bold', fontSize: '20', color: 'white'}}></Text>
    <Text style = {{color: 'white'}}>Know who you're dealing with | Know what you're buying | Know what it will cost</Text> */}
<Text style = {{color: 'white', fontSize: 24, fontWeight: 'bold'}}>⚠️ Be Careful! ⚠️</Text>
<Text style = {{color: 'white',fontWeight: 'bold'}}>Know who you're dealing with.</Text>
<Text style = {{color: 'white',fontWeight: 'bold'}}>Know what you're buying.</Text>
<Text style = {{color: 'white',fontWeight: 'bold'}}>Know what it will cost.</Text>

    </View>

    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 25
  },
  card:{
    backgroundColor: 'lightgreen',
    alignItems: "center",
    justifyContent: "flex-start",
    width: '90%',
    borderRadius: 25,
  },
  subCard:{
    borderRadius: 25,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 15,
    width: '90%'
  }
});
  



