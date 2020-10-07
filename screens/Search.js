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
import DropDownPicker from "react-native-dropdown-picker";

export default class SignUp extends React.Component {
  state = {
    keyword: "",
    category: "",
    district: "",
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
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Search</Text>
        </View>
        <ScrollView>
          <Text>Keyword</Text>
          <TextInput
            style={styles.rectangle1}
            placeholder="Keyword"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(val) => this.onChangeText("keyword", val)}
          />
          <Text style={styles.category}>Category</Text>
          <DropDownPicker
            items={[
              { label: "Harvest", value: "Harvest" },
              { label: "Machinery", value: "Machinery" },
            ]}
            defaultIndex={0}
            placeholder="Select Category"
            containerStyle={{ width: 304, height: 43 }}
            dropDownStyle={{ backgroundColor: "white" }}
            placeholderStyle={{
              fontWeight: "bold",
              padding: 10,
              color: "white",
              borderRadius: 5,
            }}
            labelStyle={{
              color: "white",
              backgroundColor: "#1696f2",
              padding: 10,
              borderRadius: 30,
              width: 300,
            }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <Text style={styles.district}>District</Text>
          <DropDownPicker
            items={[
              { label: "Anuradapura", value: "Anuradapura" },
              { label: "Colombo", value: "Colombo" },
            ]}
            defaultIndex={0}
            placeholder="Select District"
            containerStyle={{ width: 304, height: 43 }}
            dropDownStyle={{ backgroundColor: "white" }}
            placeholderStyle={{
              fontWeight: "bold",
              padding: 10,
              color: "white",
              borderRadius: 5,
            }}
            labelStyle={{
              color: "white",
              backgroundColor: "#1696f2",
              padding: 10,
              borderRadius: 30,
              width: 300,
            }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 40,
            }}
          >
            <Button
              title="Search"
              onPress={() =>
                navigation.navigate("Home", { lang: lang, keyword: keyword })
              }
            />
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
  keyword: {
    width: 67,
    height: 21,
    color: "#050505",
    fontFamily: "Times New Roman",
    fontSize: 18,
    fontWeight: "400",
  },

  background: {
    width: 375,
    height: 667,
    backgroundColor: "#003f5c",
  },
});
