import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Header from "../components/header";
import { getAllContacts } from "../storage/AsyncStorage";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import SearchBar from "../components/searchbar";

const PeopleList = ({ navigation }) => {
  const IsFocused = useIsFocused();
  const [contatos, setcontatos] = useState([]);
  const [filteredContatos, setFilteredContatos] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllContacts().then((response) => {
      setcontatos(response);
      setFilteredContatos(response);
    });
  }, [IsFocused]);
  const MudaTelaEdita = () => {
    navigation.navigate("EditUser");
  };
  const MudaTelaVisualiza = (contato) => {
    navigation.navigate("UserView", { id: contato.id });
  };

  const handleSearch = () => {
    const filteredData = {};

    for (const key in data) {
      const contacts = data[key].filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchText.toLowerCase())
      );

      if (contacts.length > 0) {
        filteredData[key] = contacts;
      }
    }

    setSearchResults(filteredData);
  };

  return (
    <>
      <Header title="Agenda Telefonica" />
      <View>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />

        <TouchableOpacity style={style.button} onPress={MudaTelaEdita}>
          <Text>Adicionar Contato</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredContatos &&
          filteredContatos.map((contato, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={style.line}
                onPress={() => MudaTelaVisualiza(contato)}
              >
                {contato.foto ? (
                  <Image source={{ uri: contato.foto }} style={style.foto} />
                ) : (
                  <Image
                    source={require("../assets/user.png")}
                    style={style.foto}
                  />
                )}
                <Text style={style.lineText}>
                  {contato.textnome + " " + contato.textsobrenome}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};
const style = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#A9A9A9",
    padding: 10,
    height: 40,
    borderRadius: 15,
  },
  line: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 1,
    padding: 10,
  },
  lineText: {
    fontSize: 30,
    paddingLeft: 20,
    textAlign: "center",
  },
  foto: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },
});

export default PeopleList;
