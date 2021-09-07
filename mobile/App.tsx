import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTeachersScreen from "./screens/MyTeachersScreen";
import MyAccountScreen from "./screens/MyAccountScreen";
import StudentsScreen from "./screens/StudentsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const getIconName = (name: string, focused: boolean) => {
  switch (name) {
    case "Mon compte":
      return focused ? "person" : "person-outline";
      break;
    case "Mes formateurs":
      return focused ? "people" : "people-outline";
      break;
    case "Les élèves":
      return focused ? "people-circle" : "people-circle-outline";
      break;
    default:
      break;
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={getIconName(route.name, focused)}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Mon compte" component={MyAccountScreen} />
        <Tab.Screen name="Mes formateurs" component={MyTeachersScreen} />
        <Tab.Screen name="Les élèves" component={StudentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
