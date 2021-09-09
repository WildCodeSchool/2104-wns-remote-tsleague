import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as yup from "yup";

const MyTeachersSchema = yup.object({
  name: yup.string().required("Ce champ est obligatoire").min(5),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Veuillez entrer un email")
    .min(5),
});

export default function MyAccountForm({ navigation }: any) {
  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={MyTeachersSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, handleChange, handleSubmit }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Nom"
              onChangeText={handleChange("name")}
              value={values.name}
            />
            {/* <View>{errors.name}</View> */}

            <TextInput
              style={globalStyles.input}
              placeholder="Mail"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {/* <View>{errors.email}</View> */}

            <Button
              color="gray"
              title="AJOUTER UN FORMATEUR"
              onPress={() => handleSubmit()}
            />
            <Button
              color="blue"
              title="SUIVANT"
              onPress={() => navigation.navigate("Les élèves")}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
