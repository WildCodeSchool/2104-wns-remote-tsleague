import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import MyTeachersForm from "./MyTeachersForm";

export default function MyTeachersScreen() {
  return (
    <View>
      <MyTeachersForm/>
    </View>
  );
}
