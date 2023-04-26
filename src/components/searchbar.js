import React from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

const SearchBar = ({ text, setText }) => {
  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder={"Pesquisar contatos..."}
      style={style.input}
    />
  );
};
const style = StyleSheet.create({
  input: {
    alignItems: "center",
    backgroundColor: "#A9A9A9",
    padding: 10,
    height: 40,
    borderRadius: 15,
  },
});

export default SearchBar;
