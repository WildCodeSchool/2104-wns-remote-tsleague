import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import Carousel from "./Carousel";

type HomeScreenNavigationProp = BottomTabScreenProps<{
  "Mon compte": undefined;
}>;

export default function HomeScreen({ navigation }: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Carousel />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={() => navigation.navigate("Mon compte")}
        >
          <Text style={styles.textStyle}>CRÉER UNE CLASSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#0065A8",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
