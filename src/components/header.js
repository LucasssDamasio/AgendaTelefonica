import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: "#8B008B",
    alignItens: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
  },
});

export default Header;
