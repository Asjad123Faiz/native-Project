import React from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      address: "",
    };
  }
  submit() {
    console.warn("all vlaue", this.state);
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter name"
          style={[styles.textBox]}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
        ></TextInput>
        <TextInput
          placeholder="Enter password"
          secureTextEntry={true}
          style={[styles.textBox]}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        ></TextInput>
        <TextInput
          placeholder="Enter address"
          style={[styles.textBox]}
          onChangeText={(text) => {
            this.setState({ address: text });
          }}
        ></TextInput>
        <Button
          title="Submit"
          onPress={() => {
            this.submit();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    borderColor: "skyblue",
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
export default Form;
