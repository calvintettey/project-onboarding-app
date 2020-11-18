import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function PaymentSuccessfulScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PAYMENT SUCCESSFUL</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      <Image
        style={styles.image}
        source={require("../assets/purple/purchasesuccess.png")}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerPrevious}>Previous</Text>
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
    marginBottom: 30,
  },

  image: {
    height: 330,
    width: 330,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#8580d9",
    height: 60,
    width: 200,
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
    flexDirection: "row",
    marginTop: 55,
  },

  footerPrevious: {
    color: "#a3a3a3",
    fontSize: 18,
  },
});
