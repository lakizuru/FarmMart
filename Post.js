import React from "react";
import firestore from "@react-native-firebase/firestore";
import { List } from "react-native-paper";

export default function Post({
  title,
  category,
  description,
  price,
  unit,
  quantity,
  area,
  district,
}) {
  async function toggleComplete() {
    await firestore().collection("Posts").doc(id).update({
      complete: !complete,
    });
  }

  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      /*left={(props) => (
        <List.Icon {...props} icon={complete ? "check" : "cancel"} />
      )}*/
    />
  );
}
