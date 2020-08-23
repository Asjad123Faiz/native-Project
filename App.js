// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flexWrap: "wrap",
//         flex: 1,
//         alignItems: "flex-start",
//         justifyContent: "center",
//         flexDirection: "row",
//       }}
//     >
//       <View style={{ height: 130, width: 130, backgroundColor: "red" }}></View>
//       <View
//         style={{ height: 130, width: 130, backgroundColor: "green" }}
//       ></View>
//       <View
//         style={{ height: 130, width: 130, backgroundColor: "yellow" }}
//       ></View>
//       <View style={{ height: 130, width: 130, backgroundColor: "blue" }}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "yellow",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlayScreen from "./src/Play";

export default function App() {
  const [play, setPlay] = useState(false);
  return play ? (
    <PlayScreen />
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Asjad Faiz Ansari</Text>
      <Text style={styles.emoji}> ✋ 😏 ❤️</Text>
      <View style={styles.butoons}>
        <Button
          title="Login"
          onPress={() => {
            setPlay(true);
          }}
        />
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
});
