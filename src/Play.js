import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const heart = require("../assets/heart.jpg");
const handshake = require("../assets/handshake.jpg");
const finger = require("../assets/finger.jpg");

const randomRPS = () => {
  const signs = [heart, handshake, finger];
  const rand = Math.floor(Math.random() * 3);
  return signs[rand];
};
const bgColor = ["labc9c", "#3498db", "#9b59b6"];

const PlayScreen = () => {
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (count === 0) return;
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <View
      style={StyleSheet.compose(styles.container, {
        backgroundColor: bgColor[count - 1],
      })}
    >
      {count > 0 ? (
        <Text style={styles.header}>{count}</Text>
      ) : (
        <>
          <Image style={styles.imagestyle} source={randomRPS()} />
          <View style={styles.button}>
            <Button
              title="CLick"
              onPress={() => {
                setCount(3);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 150,
  },
  button: {
    width: "80%",
    marginTop: 200,
  },
  imagestyle: {
    height: 150,
    width: 150,
    position: "absolute",
  },
});
export default PlayScreen;
