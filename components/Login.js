import React from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

// function Login(props) {
//   console.warn(props);
//   function login() {
//     alert("Asjad faiz click heare");
//   }
//   return (
//     <View>
//       <Text>Asjad Faiz Started React nativeProject {props.asjad}</Text>
//       <Button title="Login" onPress={login} />
//     </View>
//   );
// }
// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       dates: "Some App is fine",
//     };
//   }
//   test() {
//     this.setState({ dates: "New App Dates" });
//   }
//   render() {
//     console.warn(this.state);
//     return (
//       <View>
//         <Text>Asjad Faiz Started React nativeProject</Text>
//         <Button
//           title="Login"
//           onPress={() => {
//             this.test();
//           }}
//         />
//         <Text>{this.state.dates}</Text>
//       </View>
//     );
//   }
// }

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <View>
        <Text style={[styles.colors, styles.fonts]}>
          Asjad Faiz Started React nativeProject
        </Text>
        <Text style={[styles.fonts, styles.others]}>{this.state.name}</Text>
        <TextInput
          placeholder={"enter your name"}
          onChangeText={(e) => {
            this.setState({ name: e });
          }}
          style={[styles.inputst]}
        ></TextInput>
        <Button
          title="submit"
          onPress={() => {
            alert(this.state.name);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  colors: {
    color: "green",
    backgroundColor: "red",
  },
  fonts: {
    fontSize: 20,
    fontWeight: "bold",
  },
  others: {
    color: "blue",
    textAlign: "left",
  },
  inputst: {
    height: 30,
    fontSize: 20,
    color: "red",
    backgroundColor: "orange",
  },
});
export default Login;
