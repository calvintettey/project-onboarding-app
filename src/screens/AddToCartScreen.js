import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("screen");
export default function AddToCartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>ADD TO CART</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/purple/addtocart.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Payment Successful");
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text
          onPress={() => {
            navigation.navigate("Online Shopping");
          }}
          style={styles.footerSkip}
        >
          Previous
        </Text>

        <Text
          onPress={() => {
            navigation.navigate("Payment Successful");
          }}
          style={styles.footerPrevious}
        >
          Skip
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    // marginVertical: 15,
  },

  description: {
    fontSize: 18,
    color: "#a3a3a3",
    // textAlign: "justify",
    // lineHeight: 24,
    // marginBottom: 25,
  },

  image: {
    height: 0.7 * width,
    width: 0.7 * width,
    // marginBottom: 50,
  },
  imageContainer: {
    alignItems: "center",
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
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    // marginTop: 75,
    justifyContent: "space-between",
  },

  footerSkip: {
    color: "#a3a3a3",
    fontSize: 18,
  },

  footerPrevious: {
    color: "#a3a3a3",
    fontSize: 18,
  },
});
