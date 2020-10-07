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

export default class SignUp extends React.Component {
  state = {
    PhoneNumber: "",
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 40,
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>
            Set New Password
          </Text>
        </View>
        <ScrollView>
          <Text>Phone Number</Text>
          <TextInput
            style={styles.rectangle1}
            placeholder="Phone Number"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) => this.onChangeText("Phone Number", val)}
          />
          <Text>New Password</Text>
          <TextInput
            style={styles.rectangle1}
            placeholder="New Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) => this.onChangeText("New Password", val)}
          />
          <Text>Confirm New Password</Text>
          <TextInput
            style={styles.rectangle1}
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
            <Button title="Submit" onPress={this.SignUp} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

// Style for "Search"
const styles = StyleSheet.create({
  rectangle1: {
    width: 304,
    height: 43,
    borderColor: "#707070",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#1696f2",
  },

  background: {
    width: 375,
    height: 667,
    backgroundColor: "#003f5c",
  },
});
