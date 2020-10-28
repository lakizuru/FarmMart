import React from "react";
import firebase from "../firebaseDb";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';


export default class NewPost extends React.Component {

  dbRef = firebase.firestore().collection('Posts');
  state = {
    Category: '', Description: '', Division: '', Title: '',Unit:'',Price:'',Quantity:'', User: ''
  }


  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  NewPost = async () => {

    await AsyncStorage.getItem('phone').then((value) => this.setState({ 'User': value }))
    
    try {


      if(this.state.Price ==""){
        alert("Wrong Price Details");
        throw err;
      }
      if(this.state.Quantity ==""){
        alert("Wrong Quantity Details");
        throw err;
      }
      
      this.dbRef.add({
        area:this.state.Division,
        category:this.state.Category,
        description:this.state.Description,
        price:this.state.Price,
        qty:this.state.Quantity,
        title:this.state.Title,
        unit:this.state.Unit,
        user:this.state.User


      });
      this.props.navigation.navigate('Home')
      // here place your signup logic
      console.log('Post Added ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
        <Text style={{fontSize:35,fontWeight:'bold',color:'#ff8080'}}>New Post</Text>
        
        </View>

        <DropDownPicker
    items={[
        {label:  'Harvest',value:'Harvest'},
        {label: 'Machinery',value:'Machinery'},
        {label: 'Transport',value:'Transport'},
        {label: 'Chemicals',value:'Chemicals'},
        {label: 'Other',value:'Other'},
      
    ]}
    style={{borderColor:'#ff8080',borderWidth:2}}
    defaultIndex={0}
    
    placeholder='Select Category'
    containerStyle={{width:370,height: 50,marginLeft:5,marginBottom:15,marginTop:15}}
    dropDownStyle={{backgroundColor: 'white',borderColor:'black'}}
    placeholderStyle={{
      fontWeight: 'bold',padding:10 ,color:'white',
      borderRadius:5
  }}
    labelStyle={{color:'white',    backgroundColor: "#06283B",
    padding:10,borderRadius:30,width:300}}
    onChangeItem={item => this.onChangeText('Category', item.value)}
/>
        
          <TextInput
          style={styles.input}
          placeholder='Title'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Title', val)}
        />
        
        <TextInput
          style={{ 
            
            width: 380,
            height: 130,
            backgroundColor: '#06283B',
            color: 'white',
            borderRadius: 14,
            fontSize: 18,
            borderColor:"#ff8080",
            borderWidth:2,
            fontWeight:'bold',}}
            maxLength={100}
            multiline={true}
            autoCapitalize="none"
            placeholder="Description"
            placeholderTextColor='white'
            placeholderStyle={{margin:10,paddingTop:10,marginTop:20}}
          onChangeText={val => this.onChangeText('Description', val)}

        />
    
     <View style={{ flex: 1,
    flexDirection: "column",paddingBottom:10}}>
      <View style={{flexDirection: "row",justifyContent:'space-evenly',padding:10,paddingBottom:10}}>
          
         <TextInput style={styles.co1} placeholder='Price' placeholderTextColor='white' keyboardType={'numeric'} onChangeText={val => this.onChangeText('Price', val)} />
         <TextInput style={styles.co1} placeholder='Unit'placeholderTextColor='white' onChangeText={val => this.onChangeText('Unit', val)} />
         <TextInput style={styles.co1} placeholder='Quantity'placeholderTextColor='white' onChangeText={val => this.onChangeText('Quantity', val)}keyboardType={'numeric'}/>
         </View>
       </View>

     
        
        <TextInput
          style={styles.input}
          placeholder='Division'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Division', val)}
        />

 <DropDownPicker
    items={[
        {label:  'Ampara',value:'Ampara'},
        {label: 'Anuradhapura',value:'Anuradhapura'},
        {label: 'Badulla',value:'Badulla'},
        {label: 'Batticaloa',value:'Batticaloa'},
        {label: 'Colombo',value:'Colombo'},
        {label: 'Galle',value:'Galle'},
        {label: 'Gampaha',value:'Gampaha'},
        {label: 'Hambantota',value:'Hambantota'},
        {label: 'Jaffna',value:'Jaffna'},
        {label: 'Kalutara',value:'Kalutara'},
        {label: 'Kandy',value:'Kandy'},
        {label: 'Kegalle',value:'Kegalle'},
        {label: 'Kilinochchi',value:'Kilinochchi'},
        {label: 'Kurunegala',value:'Kurunegala'},
        {label: 'Mannar',value:'Mannar'},
        {label: 'Matale',value:'Matale'},
        {label: 'Matara',value:'Matara'},
        {label: 'Moneragala',value:'Moneragala'},
        {label: 'Mullaitivu',value:'Mullaitivu'},
        {label: 'NuwaraEliya',value:'NuwaraEliya'},
        {label: 'Polonnaruwa',value:'Polonnaruwa'},
        {label: 'Puttalam',value:'Puttalam'},
        {label: 'Ratnapura',value:'Ratnapura'},
        {label: 'Trincomalee',value:'Trincomalee'},
        {label: 'Vavuniya',value:'Vavuniya'},

      
    ]}
    style={{borderColor:'#ff8080',borderWidth:2}}
    defaultIndex={0}
    
    placeholder='Select District'
    containerStyle={{width:370,height: 50,marginLeft:5,marginBottom:15,marginTop:15}}
    dropDownStyle={{backgroundColor: 'white',borderColor:'black'}}
    placeholderStyle={{
      fontWeight: 'bold',padding:10 ,color:'white',
      borderRadius:5
  }}
    labelStyle={{color:'white',    backgroundColor: "#06283B",
    padding:10,borderRadius:30,width:300}}
    onChangeItem={item => this.onChangeText('Description', item.value)}
/>



        <View style={{    justifyContent: 'center',
    alignItems: 'center',padding:40}}>
        <Button
          
          title='Publish'
          onPress={() => this.NewPost()}
          color="#ff8080"
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 55,
    backgroundColor: "#06283B",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth:2,
    borderColor:'#ff8080',
    marginBottom: 20,
    marginTop:20,
  },
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "space-around",
    padding: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "#383838",
  },
  tet:{
    fontSize:25,
    fontStyle:'normal',
    marginLeft:20
    
  },
  co1:{
    backgroundColor: '#06283B',
    width:100,
    borderRadius:15,
    height:40,
    borderWidth:2,
    borderColor:'#ff8080',
    marginLeft:15,
    marginRight:20,
    marginTop:20,
    color:'white',
    fontWeight:'bold',
    
   
    
    
  }
})
