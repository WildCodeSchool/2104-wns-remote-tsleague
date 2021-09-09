import React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type StudentsScreenNavigationProp = BottomTabScreenProps<{
  "Mon compte": undefined;
}>;

export default function HomeScreen({
  navigation,
}: any) {
  return (
    <View>
      <View style={styles.buttonContainer}>
      <Button
      
              color="blue"
              title="CRÉER UNE CLASSE"
                onPress={() =>
          navigation.navigate( 'Mon compte')
        }
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    paddingTop: 320,
    color: "blue",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
