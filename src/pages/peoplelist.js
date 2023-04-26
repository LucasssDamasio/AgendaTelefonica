import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "../components/header";
import { getAllContacts } from "../storage/AsyncStorage";
import { useIsFocused } from "@react-navigation/native";
import { SearchBar } from "react-native-screens";
import * as ImagePicker from 'expo-image-picker';

const PeopleList = ({ navigation }) => {
  const IsFocused = useIsFocused();
  const [contatos, setcontatos] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllContacts().then((response) => {
      setcontatos(response);
    });
  }, [IsFocused]);
  const MudaTelaEdita = () => {
    navigation.navigate("EditUser");
  };
  const MudaTelaVisualiza = (contato) => {
    navigation.navigate("UserView", { id: contato.id });
  };

  // const handleSearch = (text) => {
  //   setSearchText(text);
  // };

  //  const filteredContacts = contato.filter(
  //    (contato) => contato.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  //  );

  return (
    <>
      <Header title="Agenda Telefonica" />
      <View>
        {/* <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ContactItem contact={item} />}
      /> */}

        <TouchableOpacity style={style.button} onPress={MudaTelaEdita}>
          <Text>Adicionar Contato</Text>
        </TouchableOpacity>
      </View>
      {contatos.map((contato, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={style.line}
            onPress={() => MudaTelaVisualiza(contato)}
          >
            <Text style={style.lineText}>
              {contato.textnome + " " + contato.textsobrenome}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};
const style = StyleSheet.create({
  button: {
    aligncontato: "center",
    backgroundColor: "#A9A9A9",
    padding: 10,
    height: 40,
    borderRadius: 15,
  },
  line: {
    height: 60,
    aligncontato: "center",
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
