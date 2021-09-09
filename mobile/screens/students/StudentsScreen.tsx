import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import StudentsForm from "./StudentsForm";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type StudentsScreenNavigationProp = BottomTabScreenProps<{
  "Accueil": undefined;
}>;

export default function StudentsScreen({
  navigation,
}: StudentsScreenNavigationProp) {
  return (
    <View>
      <StudentsForm navigation={navigation} />
    </View>
  );
}
