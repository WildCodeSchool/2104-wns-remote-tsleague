import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import StudentsForm from "./StudentsForm";

export default function StudentsScreen() {
  return (
    <View>
      <StudentsForm/>
    </View>
  );
}
