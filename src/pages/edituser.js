import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import TextInputA from "../components/textinput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addContact,
  getAllContacts,
  getContactById,
  updateContact,
} from "../storage/AsyncStorage";

const EditUser = ({ route, navigation }) => {
  const { id } = route.params || {};
  const [isediting] = useState(id ? true : false);
  const [TelefoneCount, SetTelefoneCount] = useState(1);
  const [EmailCount, SetEmailCount] = useState(1);
  const [textnome, setTextNome] = useState("");
  const [textsobrenome, setTextSobrenome] = useState("");
  const [texttelefone, setTextTelefone] = useState([{ numero: "" }]);
  const [textemail, setTextEmail] = useState([{ email: "" }]);
  const [textendereco, setTextEndereco] = useState("");

  useEffect(() => {
    if (id) {
      getContactById(id).then((response) => {
        setTextNome(response.textnome);
        setTextSobrenome(response.textsobrenome);
        setTextTelefone(response.texttelefone);
        setTextEmail(response.textemail);
        setTextEndereco(response.textendereco);
      });
    }
  }, [id]);

  function nomeChanged(textnome) {
    setNome(textnome);
  }

  function sobrenomeChanged(textsobrenome) {
    setSobrenome(textsobrenome);
  }

  function telefoneChanged(texttelefone) {
    setTelefone(texttelefone);
  }

  function emailChanged(textemail) {
    setEmail(textemail);
  }

  function enderecoChanged(textendereco) {
    setEndereco(textendereco);
  }

  const clickHandler = () => {
    if (texttelefone.length < 3) {
      const currentTelefones = [...texttelefone];
      currentTelefones.push({ numero: "" });
      setTextTelefone(currentTelefones);
    } else {
      alert("Numero maximo telefone atingido ");
    }
  };

  const clickHandler2 = () => {
    if (textemail.length < 3) {
      const currentEmails = [...textemail];
      currentEmails.push({ email: "" });
      setTextEmail(currentEmails);
    } else {
      alert("Numero maximo email atingido ");
    }
  };

  const handleTelefoneChange = (text, index) => {
    const currentTelefones = [...texttelefone];
    currentTelefones[index].numero = text;
    setTextTelefone(currentTelefones);
  };

  const handleEmailChange = (text, index) => {
    const currentEmails = [...textemail];
    currentEmails[index].email = text;
    setTextEmail(currentEmails);
  };

  async function clickSaver() {
    if (!isediting) {
      const contato = {
        id: new Date().getTime(),
        textnome,
        textsobrenome,
        texttelefone,
        textemail,
        textendereco,
      };
      await addContact(contato);
      navigation.goBack();
    } else {
      const contato = {
        id: id,
        textnome,
        textsobrenome,
        texttelefone,
        textemail,
        textendereco,
      };
      await updateContact(contato);
      navigation.goBack();
    }
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.cabecalho}>
        <Image
          source={require("../assets/addUserIcon.png")}
          style={style.adduser}
        />
        <TouchableOpacity style={style.button2} onPress={clickSaver}>
          <Text style={style.line}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={style.cadastro}>
        <Text>Nome</Text>
        <TextInputA
          text={textnome}
          onChangeText={setTextNome}
          placeholder="Digite seu Nome"
        ></TextInputA>

        <Text>Sobrenome</Text>
        <TextInputA
          text={textsobrenome}
          onChangeText={setTextSobrenome}
          placeholder="Digite seu Sobrenome"
        >
          {" "}
        </TextInputA>

        {texttelefone.map((telefone, index) => {
          return (
            <View key={index}>
              <Text>Telefone</Text>
              <TextInputA
                text={telefone.numero}
                onChangeText={(text) => handleTelefoneChange(text, index)}
                placeholder="Digite seu Telefone"
              />
            </View>
          );
        })}
        <View style={style.buttonView}>
          <TouchableOpacity style={style.button} onPress={clickHandler}>
            <Text>Adicionar Novo Telefone</Text>
            <Image
              source={require("../assets/addIcon.png")}
              style={style.add}
            />
          </TouchableOpacity>
        </View>

        {textemail.map((email, index) => {
          return (
            <View key={index}>
              <Text>Email</Text>
              <TextInputA
                text={email.email}
                onChangeText={(text) => handleEmailChange(text, index)}
                placeholder="Digite seu Email"
              />
            </View>
          );
        })}
        <View>
          <TouchableOpacity style={style.button} onPress={clickHandler2}>
            <Text>Adicionar Novo Email</Text>
            <Image
              source={require("../assets/addIcon.png")}
              style={style.add}
            />
          </TouchableOpacity>
        </View>

        <Text>Endereço</Text>
        <TextInputA
          text={textendereco}
          onChangeText={setTextEndereco}
          placeholder="Digite seu Endereço"
        ></TextInputA>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  button: {
    padding: 10,
    height: 40,
    flexDirection: "row",
  },
  button2: {
    padding: 10,
    height: 50,
    width: 150,
    backgroundColor: "#8B008B",
  },
  line: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  add: {
    width: 40,
    height: 30,
  },
  adduser: {
    width: 100,
    height: 100,
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    padding: 10,
  },
});

export default EditUser;
