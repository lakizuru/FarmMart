import { useNavigation } from "@react-navigation/native";
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

export default class Search extends React.Component {
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
              { label: "Chemicals", value: "Chemicals" },
              { label: "Transport", value: "Transport" },
              { label: "Others", value: "Others" },
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
            onChangeItem={(item) => this.onChangeText('category', item)}
          />

          <Text style={styles.district}>District</Text>
          <DropDownPicker
            items={[
              { label: "Ampara", value: "Ampara" },
              { label: "Anuradhapura", value: "Anuradhapura" },
              { label: "Badulla", value: "Badulla" },
              { label: "Batticaloa", value: "Batticaloa" },
              { label: "Colombo", value: "Colombo" },
              { label: "Galle", value: "Galle" },
              { label: "Gampaha", value: "Gampaha" },
              { label: "Hambanthota", value: "Hambanthota" },
              { label: "Jaffna", value: "Jaffna" },
              { label: "Kaluthara", value: "Kaluthara" },
              { label: "Kandy", value: "Kandy" },
              { label: "Kegalle", value: "Kegalle" },
              { label: "Kilinochchi", value: "Kilinochchi" },
              { label: "Kurunegala", value: "Kurunegala" },
              { label: "Mannar", value: "Mannar" },
              { label: "Mathale", value: "Mathale" },
              { label: "Matara", value: "Matara" },
              { label: "Moneragala", value: "Moneragala" },
              { label: "Mullaitivu", value: "Mullaitivu" },
              { label: "Nuwara Eliya", value: "Nuwara Eliya" },
              { label: "Polonnaruwa", value: "Polonnaruwa" },
              { label: "Puttalam", value: "Puttalam" },
              { label: "Rathnapura", value: "Rathnapura" },
              { label: "Trincomalee", value: "Trincomalee" },
              { label: "Vavuniya", value: "Vavuniya" },

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
            onChangeItem={(item) => this.onChangeText('district', item.value)}
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
                navigation.navigate("Home", { lang: lang, keyword: keyword, district: district })
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
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "space-around",
    padding: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "#383838",

  },
});
