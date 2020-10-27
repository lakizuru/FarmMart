import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SignUp extends React.Component {
  state = {
    PhoneNumber: "",
    OTP: "",
    NewPassword: "",
    ConfirmNewPassword: "",
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "padding" : "height"}
        enabled
        style={styles.container}
      >
        <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
        <Text style={{fontSize:35,fontWeight:'bold',color:'#fb5b5a'}}>New</Text>
        <Text style={{fontSize:35,fontWeight:'bold',color:'#fb5b5a'}}>Password</Text>
        </View>
        <ScrollView>
          <Text>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) => this.onChangeText("Phone Number", val)}
          />
          
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 40,
            }}
          >
            <Button title="Confirm Phone number"Press={this.SignUp} color='#fb5b5a' style={styles.button}/>
          </View>

          <Text>OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP Code"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) => this.onChangeText("OTP", val)}
          />

          
          <Text>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) => this.onChangeText("New Password", val)}
          />
          <Text>Confirm New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) =>
              this.onChangeText("Confirm New Password", val)
            }
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 40,
            }}
          >
            <Button title="Submit" onPress={this.SignUp} color='#fb5b5a'style ={styles.button}/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

// Style for "Search"
const styles = StyleSheet.create({
  
  background: {
    width: 375,
    height: 667,
    backgroundColor: "#003f5c",
  },
  
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "space-around",
    padding: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "#383838",

  },
  input: {
    width: "100%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    
  
  
  
  },
  button: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#fb5b5a",
    width: 10,
  },
});
