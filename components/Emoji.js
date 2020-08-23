import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Asjad Faiz Ansari</Text>
      <Text style={styles.emoji}> ✋ 😏 ❤️</Text>
      <View style={styles.butoons}>
        <Button title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
  },
  emoji: {
    fontSize: 40,
  },
  butoons: {
    width: "80%",
    marginTop: 40,
  },
});
