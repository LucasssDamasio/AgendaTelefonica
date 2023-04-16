import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity , SearchBar } from "react-native";

const User = (prop) => {
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
          
         
        </>
   );
  };
  const style = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        height:40,
        borderRadius:15
        
      },
    
  });
  
  export default User;
  

