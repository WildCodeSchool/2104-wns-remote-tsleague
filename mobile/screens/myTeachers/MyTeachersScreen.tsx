import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import MyTeachersForm from "./MyTeachersForm";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type MyTeachersScreenNavigationProp = BottomTabScreenProps<{
  "Les élèves": undefined;
}>;

export default function MyTeachersScreen({
  navigation,
}: MyTeachersScreenNavigationProp) {
  return (
    <View>
      <MyTeachersForm navigation={navigation} />
    </View>
  );
}
