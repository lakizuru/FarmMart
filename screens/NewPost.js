import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
//import { TextInput } from 'react-native-gesture-handler'

export default class SignUp extends React.Component {
  state = {
    Category: '', Description: '', Division: '', title: ''
  }
  /*onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }*/
  /*signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }*/
 
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
        <Text style={{fontSize:35,fontWeight:'bold'}}>New Post</Text>
        
        </View>
        <Text style={styles.tet}>Category</Text>
        <DropDownPicker
    items={[
        {label: 'Anuradapura', value: 'Anuradapura'},
        {label: 'shone', value: 'shone'},
    ]}
    defaultIndex={0}
    placeholder='Select'
    containerStyle={{width:370,height: 50,marginLeft:15}}
    dropDownStyle={{backgroundColor: 'white'}}
    placeholderStyle={{
      fontWeight: 'bold',padding:10 ,color:'white',
      borderRadius:5
  }}
    labelStyle={{color:'white',backgroundColor:'#1696f2',padding:10,borderRadius:30,width:300}}
    onChangeItem={item => console.log(item.label, item.value)}
/>
        <Text style={styles.tet}>Title</Text>
          <TextInput
          style={styles.input}
          placeholder='Title'
          autoCapitalize="none"
          placeholderTextColor='white'
          //onChangeText={val => this.onChangeText('title', val)}
        />
        <Text style={styles.tet}>Description</Text>
        <TextInput
          style={{    width: 380,
            height: 130,
            backgroundColor: '#42A5F5',
            margin: 10,
            padding: 8,
            color: 'white',
            borderRadius: 14,
            fontSize: 18,
            fontWeight: '500',}}
            maxLength={100}
          
         
          autoCapitalize="none"
          placeholderTextColor='white'
          
          //onChangeText={val => this.onChangeText('Description', val)}

        />
    <Text style={{fontSize:20,paddingTop:20}}>           Price                       Unit                       Quantity</Text>
     <View style={{ flex: 1,
    flexDirection: "column",paddingBottom:10}}>
      <View style={{flexDirection: "row",justifyContent:'space-evenly',padding:10,paddingBottom:10}}>
          
         <TextInput style={{backgroundColor: '#42A5F5',width:100,borderRadius:15,height:40}} />
         <TextInput style={{backgroundColor: '#42A5F5',width:100,borderRadius:15}} />
         <TextInput style={{backgroundColor: '#42A5F5',width:100,borderRadius:15}} />
         </View>
       </View>

     
                <Text style={styles.tet}>Division</Text>
        <TextInput
          style={styles.input}
          placeholder='Division'
          autoCapitalize="none"
          placeholderTextColor='white'
          //onChangeText={val => this.onChangeText('Division', val)}
        />
 <Text style={styles.tet}>District</Text>
        <DropDownPicker
    items={[
        {label: 'Anuradapura', value: 'Anuradapura'},
        {label: 'shone', value: 'shone'},
    ]}
    defaultIndex={0}
    placeholder='Select District'
    containerStyle={{width:370,height: 50,marginLeft:15}}
    dropDownStyle={{backgroundColor: 'white'}}
    placeholderStyle={{
      fontWeight: 'bold',padding:10 ,color:'white',
      borderRadius:5
  }}
    labelStyle={{color:'white',backgroundColor:'#1696f2',padding:10,borderRadius:30,width:300}}
    onChangeItem={item => console.log(item.label, item.value)}
/>


        <View style={{    justifyContent: 'center',
    alignItems: 'center',padding:40}}>
        <Button
          
          title='Publish'
          onPress={this.Publish}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    
    width: 380,
    height: 35,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  tet:{
    fontSize:25,
    fontStyle:'normal',
    marginLeft:20
    
  }
})