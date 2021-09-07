import React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text> HomeScreen </Text>
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
         title="Learn More"
         color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
