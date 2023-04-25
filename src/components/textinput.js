import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputA = ({text, onChangeText, placeholder}) => {
  

  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default TextInputA;
