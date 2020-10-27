import React from "react";
import firebase from "../firebaseDb";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default class Settings extends React.Component {

  constructor(){
    super();
  }

  state = {
    firstname: '',lastname:'', District: '', phone_number: '',Password:'',ConfirmPassword:'',Division:''
  }

  phoneNo = window.localStorage.getItem("phoneNo");

  
  componentDidMount(){
    console.log(this.phoneNo);
    const user = firebase.firestore().collection("Users").doc(this.phoneNo);

    user
    .get()
    .then((doc) => {
      if (doc.exists) {
        const ans = doc.data();
        this.setState({
          firstname : ans.fname,
          lastname:ans.lname,
          District: ans.district,
          Password: ans.password,
          Division:ans.area
        })
        
        
      }
    })
  }
  
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  settings = async () => {
    
    

    const { fname,lname, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ')
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }


  updateUser(){
    try {

      if(this.state.password != this.state.ConfirmPassword){
        alert("Password Mis Matches");
        throw err;
      }

      const dbRef = firebase.firestore().collection('Users');
      dbRef.doc(this.phoneNo).set({
        area : this.state.Division,
        district:this.state.District,
        fname: this.state.firstname,
        lname: this.state.lastname,
        password: this.state.Password
      });
      
      console.log('user successfully updated')
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  

  render() {
    return (

      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:35,fontWeight:'bold',paddingTop:20,paddingLeft:15,color:'#fb5b5a'}}>Settings</Text>
                <View style={{flex:1 ,justifyContent:'center',alignItems:'center',padding:20,paddingTop:30,marginLeft:130}}>
        
        <Button
          title='Logout'
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
          color='#fb5b5a'
        />
      
        </View>
        </View>
        <TextInput
          style={styles.input}
          
          autoCapitalize="none"
          
          value = {this.state.firstname}
          onChangeText={val => this.onChangeText('firstname', val)}

        />
        <TextInput
          style={styles.input}
          placeholder='Lastname'
          autoCapitalize="none"
          value = {this.state.lastname}
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('lastname', val)}

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
        {label: 'KurunegalaMannar',value:'KurunegalaMannar'},
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
    value = {this.state.District}
    placeholderStyle={{
      fontWeight: 'bold',padding:10 ,color:'white',
      borderRadius:5
  }}
    labelStyle={{color:'white',    backgroundColor: "#06283B",
    padding:10,borderRadius:30,width:300}}
    onChangeItem={item => this.onChangeText('District', item.value)}
/>



<TextInput
          style={styles.input}
          placeholder='Division'
          autoCapitalize="none"
          placeholderTextColor="white"
          value = {this.state.Division}
          onChangeText={val => this.onChangeText('Division', val)}
        />



<TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          value = {this.state.Password}
          onChangeText={val => this.onChangeText('Password', val)}
        />
          <TextInput
         
         style={styles.input}
         placeholder='Confirm Password'
         secureTextEntry={true}
         autoCapitalize="none"
         placeholderTextColor="white"
         //value = {this.state.Password}

         onChangeText={val => this.onChangeText('ConfirmPassword', val)}
       />

 <View style={{    justifyContent: 'center',
    alignItems: 'center',padding:40}}>
        <Button
          
          title='Update'
          onPress={() => {this.updateUser();this.props.navigation.navigate('Home');}}
          color='#fb5b5a'
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
  tet: {
    fontSize: 25,
    fontStyle: "normal",
    marginLeft: 20,
  },
});
