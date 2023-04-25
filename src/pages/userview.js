import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getContactById, removeContact } from "../storage/AsyncStorage";
import { useIsFocused } from "@react-navigation/native";

const UserView = ({ route, navigation }) => {
  const { id } = route.params || {};
  const IsFocused = useIsFocused();
  const [contato, setcontato] = useState();

  useEffect(() => {
    if (id) {
      getContactById(id).then((response) => {
        setcontato(response);
      });
    }
  }, [id, IsFocused]);

  const clickedit = () => {
    navigation.navigate("EditUser", { id: contato.id });
  };
  const clickdelete = async () => {
    await removeContact(contato.id);
    navigation.goBack();
  };

  return (
    <>
      {contato && (
        <View style={style.user}>
          <Text></Text>

          <View style={style.cima}>
            <View style={style.cabecalho}>
              <TouchableOpacity style={style.button} onPress={clickedit}>
                <Image
                  source={require("../assets/edit.png")}
                  style={style.crud}
                />
              </TouchableOpacity>

              <TouchableOpacity style={style.button} onPress={clickdelete}>
                <Image
                  source={require("../assets/delete.png")}
                  style={style.crud}
                />
              </TouchableOpacity>
            </View>

            <Image
              source={require("../assets/user.png")}
              style={style.usericon}
            />
            <Text style={style.lineText}>
              {contato.textnome + " " + contato.textsobrenome}
            </Text>
          </View>

          <ScrollView contentContainerStyle={style.baixo}>
            <Text style={style.line}>Dados</Text>

            <View style={style.label}>
              <Text style={style.line}>Telefone</Text>
              {contato.texttelefone.map((telefone, index) => {
                return (
                  <Text key={index} style={style.line}>
                    {telefone.numero}
                  </Text>
                );
              })}
            </View>

            <View style={style.label}>
              <Text style={style.line}>Email</Text>
              {contato.textemail.map((email, index) => {
                return (
                  <Text key={index} style={style.line}>
                    {email.email}
                  </Text>
                );
              })}
            </View>

            <Text style={style.line}>Endereco:{contato.textendereco}</Text>
          </ScrollView>
        </View>
      )}
    </>
  );
};
const style = StyleSheet.create({
  user: {
    backgroundColor: "#8B008B",
    width: "100%",
    flex: 1,
  },
  baixo: {
    alignItems: "center",
    backgroundColor: "#FFFAFA",
    borderRadius: 40,
    width: "100%",
    height: 400,
    paddingBottom: 50,
  },
  cima: {
    alignItems: "center",
    width: "100%",
    height: 400,
  },
  cabecalho: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  line: {
    fontSize: 30,
  },
  crud: {
    width: 50,
    height: 50,
  },
  usericon: {
    width: 200,
    height: 200,
  },
  lineText: {
    color: "#fff",
    fontSize: 30,
  },
  label: {
    width: "100%",
    alignContent: "flex-start",
    justifyContent: "center",
    gap: 5,
  },
});

export default UserView;
