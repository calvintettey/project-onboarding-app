import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddToCartScreen from "./src/screens/AddToCartScreen";
import OnlineShoppingScreen from "./src/screens/OnlineShoppingScreen";
import PaymentSuccessfulScreen from "./src/screens/PaymentSuccessfulScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Online Shopping"
        screenOptions={{
          headerStyle: { backgroundColor: "#aba6ff" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Online Shopping" component={OnlineShoppingScreen} />
        <Stack.Screen name="Add To Cart" component={AddToCartScreen} />
        <Stack.Screen
          name="Payment Successful"
          component={PaymentSuccessfulScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
