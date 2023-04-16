import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity , SearchBar } from "react-native";
import TextInputA from "../components/textinput";

const PeopleList = (prop) => {
  const names = [" Lucas Damasio", "Yago Frossard", "Arthur Moura "];
  const clickHandler = () => {
    alert("Botão Clicado");
  };

  return (
    <>
      <View>
        <TouchableOpacity style={style.button} onPress={clickHandler}>
          <Text>Adicionar Contato</Text>
        </TouchableOpacity>
      </View>
      {names.map((name, index) => {
        return (
          <View key={index} style={style.line}>
            <Text style={style.lineText}>{name}</Text>
          </View>
        );
      })}
      <View>
         <TextInputA></TextInputA>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#A9A9A9",
    padding: 10,
    height:40,
    borderRadius:15
    
  },
  line: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  lineText: {
    fontSize: 30,
    paddingLeft: 20,
    textAlign: "center",
  },
});

export default PeopleList;
