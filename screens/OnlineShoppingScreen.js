import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function OnlineShoppingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ONLINE SHOPPING</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      <Image
        style={styles.image}
        source={require("../assets/purple/shoppingcart.png")}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerSkip}>Skip</Text>

        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: 30,
    marginTop: 80,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
  },

  description: {
    fontSize: 18,
    color: "#a3a3a3",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 25,
  },

  image: {
    height: 320,
    width: 320,
    marginBottom: 50,
  },

  button: {
    backgroundColor: "#8580d9",
    height: 60,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight:"bold",
  },

  footer: {
    flexDirection: "row-reverse",
    marginTop: 55,
  },

  footerSkip: {
    color: "#a3a3a3",
    fontSize: 18,
    alignSelf: "flex-end",
  },
});
