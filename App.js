import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import PeopleList from "./src/pages/peoplelist";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Agenda Telefonica" />
        <PeopleList />
      </View>
    );
  }
}
