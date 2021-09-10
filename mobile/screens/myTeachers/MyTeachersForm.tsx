import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as yup from "yup";

const MyTeachersSchema = yup.object({
  name: yup.string().required("Ce champ est obligatoire").min(5, "Veuillez saisir un minimum de 5 caractères"),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Veuillez entrer un email")
    .min(5, "Veuillez saisir un minimum de 5 caractères"),
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
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Nom"
                onChangeText={handleChange("name")}
                value={values.name}
              />
                          <Text style={globalStyles.errorText}>{errors.name}</Text>

            </View>
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Mail"
                onChangeText={handleChange("email")}
                value={values.email}
              />
                          <Text style={globalStyles.errorText}>{errors.email}</Text>

            </View>

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
