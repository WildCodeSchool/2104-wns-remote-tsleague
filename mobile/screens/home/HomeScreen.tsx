import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Carousel from "./Carousel";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type StudentsScreenNavigationProp = BottomTabScreenProps<{
  "Mon compte": undefined;
}>;

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text> HomeScreen </Text>
      <Carousel />
      <View style={{ justifyContent: "center" }}>
        <Button
          color="blue"
          title="CRÉER UNE CLASSE"
          onPress={() => navigation.navigate("Mon compte")}
        />
      </View>
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
