import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddToCartScreen from "./screens/AddToCartScreen";
import OnlineShoppingScreen from "./screens/OnlineShoppingScreen";
import PaymentSuccessfulScreen from "./screens/PaymentSuccessfulScreen";

export default function App() {
  return (
    <View>
      {/* <OnlineShoppingScreen /> */}

      <AddToCartScreen />

      {/* <PaymentSuccessfulScreen /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
